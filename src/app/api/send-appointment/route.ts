import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

import { appointmentFormSchema } from '@/entities/appointment-form/model/schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Валидация данных
    const validatedData = appointmentFormSchema.parse(body);

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
        console.log('Appointment data:', validatedData);

        return NextResponse.json(
          { message: 'Appointment sent successfully (simulated)' },
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
        rejectUnauthorized: false, // Игнорируем ошибки SSL сертификата
      },
    });

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
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
              color: #667eea;
              margin-bottom: 5px;
            }
            .field-value {
              padding: 10px;
              background: #f5f7fa;
              border-radius: 4px;
              border-left: 3px solid #667eea;
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
              <h1>🐾 Новая заявка на приём</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">ФИО клиента:</div>
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
                <div class="field-label">Кличка животного:</div>
                <div class="field-value">${validatedData.petName}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Описание проблемы:</div>
                <div class="field-value">${validatedData.description}</div>
              </div>
              
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
      subject: `Новая заявка на приём от ${validatedData.fullName}`,
      html: htmlContent,
      text: `
Новая заявка на приём

ФИО: ${validatedData.fullName}
Телефон: ${validatedData.phone}
Email: ${validatedData.email}
Кличка животного: ${validatedData.petName}
Описание проблемы: ${validatedData.description}

Дата: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
      `,
    });

    return NextResponse.json(
      { message: 'Appointment sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending appointment:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      );
    }

    // Более детальная обработка ошибок SMTP
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
        error: 'Failed to send appointment',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
