import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

import { interviewFormSchema } from '@/entities/interview-form/model/schema';

const positionLabels = {
  veterinarian: 'Ветеринарный врач',
  assistant: 'Ассистент ветеринарного врача',
  administrator: 'Администратор',
};

export async function POST(request: Request) {
  try {
    // Получаем FormData вместо JSON
    const formData = await request.formData();

    // Извлекаем поля из FormData
    const body = {
      fullName: formData.get('fullName') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      position: formData.get('position') as string,
      experience: formData.get('experience') as string,
    };

    // Получаем файл резюме (необязательно)
    const resumeFile = formData.get('resume') as File | null;

    // Валидация данных
    const validatedData = interviewFormSchema.parse(body);

    // Проверка наличия необходимых переменных окружения
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.CLINIC_EMAIL
    ) {
      console.error('Missing SMTP configuration');

      // В режиме разработки симулируем успешную отправку
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: Simulating email send');
        console.log('Interview data:', validatedData);

        return NextResponse.json(
          { message: 'Interview application sent successfully (simulated)' },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Создание транспортера
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: parseInt(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Подготовка вложения с резюме (если есть)
    const attachments = [];
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type,
      });
    }

    // Формирование HTML письма
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #4a7c59 0%, #2a9d8f 100%);
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
            }
            .field-label {
              font-weight: bold;
              color: #4a7c59;
              margin-bottom: 5px;
            }
            .field-value {
              padding: 10px;
              background: #f5f7fa;
              border-radius: 4px;
              border-left: 3px solid #4a7c59;
            }
            .attachment-note {
              padding: 12px;
              background: #e6f7ff;
              border-radius: 4px;
              border-left: 3px solid #1890ff;
              margin-top: 20px;
              color: #0050b3;
            }
            .footer {
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #e2e8f0;
              font-size: 12px;
              color: #718096;
              text-align: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>💼 Новая заявка на собеседование</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">ФИО кандидата:</div>
                <div class="field-value">${validatedData.fullName}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Контактный телефон:</div>
                <div class="field-value">${validatedData.phone}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">${validatedData.email}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Желаемая должность:</div>
                <div class="field-value">${positionLabels[validatedData.position as keyof typeof positionLabels]}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Опыт работы:</div>
                <div class="field-value">${validatedData.experience}</div>
              </div>
              
              ${resumeFile ? `<div class="attachment-note">📎 К письму прикреплено резюме: ${resumeFile.name}</div>` : ''}
              
              <div class="footer">
                Заявка отправлена через форму на сайте<br>
                ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Отправка письма
    await transporter.sendMail({
      from: `"Сайт White Wolf" <${process.env.SMTP_USER}>`,
      to: process.env.CLINIC_EMAIL,
      subject: `Новая заявка на собеседование от ${validatedData.fullName}`,
      html: htmlContent,
      text: `
Новая заявка на собеседование

ФИО: ${validatedData.fullName}
Телефон: ${validatedData.phone}
Email: ${validatedData.email}
Должность: ${positionLabels[validatedData.position as keyof typeof positionLabels]}
Опыт работы: ${validatedData.experience}
${resumeFile ? `\nПрикреплено резюме: ${resumeFile.name}` : ''}

Дата: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json(
      { message: 'Interview application sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending interview application:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      );
    }

    if (error && typeof error === 'object' && 'code' in error) {
      const smtpError = error as { code: string; command: string };

      if (smtpError.code === 'ESOCKET') {
        return NextResponse.json(
          {
            error: 'SMTP connection error',
            details:
              'Не удалось подключиться к почтовому серверу. Проверьте настройки SMTP.',
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      {
        error: 'Failed to send interview application',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
