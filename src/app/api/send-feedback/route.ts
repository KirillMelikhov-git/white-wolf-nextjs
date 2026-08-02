import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

import { personalDataConsentSchema } from '@/shared/lib/validation/personalDataConsent';

const feedbackFormSchema = z.object({
  fullName: z
    .string()
    .min(1, 'ФИО обязательно для заполнения')
    .min(5, 'Введите полное ФИО (минимум 5 символов)')
    .refine((value) => value.trim().split(/\s+/).length >= 2, {
      message: 'Введите имя и фамилию',
    }),

  email: z
    .string()
    .min(1, 'Email обязателен для заполнения')
    .email('Введите корректный email адрес'),

  phone: z
    .string()
    .min(1, 'Телефон обязателен для заполнения')
    .regex(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Введите корректный номер телефона'
    ),

  message: z
    .string()
    .min(10, 'Сообщение должно содержать минимум 10 символов')
    .max(1000, 'Сообщение не должно превышать 1000 символов'),

  personalDataConsent: personalDataConsentSchema,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Валидация данных
    const validatedData = feedbackFormSchema.parse(body);

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
        console.log('Feedback data:', validatedData);

        return NextResponse.json(
          { message: 'Feedback sent successfully (simulated)' },
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
              background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
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
              color: #e53e3e;
              margin-bottom: 5px;
            }
            .field-value {
              padding: 10px;
              background: #f5f7fa;
              border-radius: 4px;
              border-left: 3px solid #e53e3e;
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
              <h1>💬 Обратная связь от клиента</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">ФИО клиента:</div>
                <div class="field-value">${validatedData.fullName}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">${validatedData.email}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Телефон:</div>
                <div class="field-value">${validatedData.phone}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Сообщение:</div>
                <div class="field-value">${validatedData.message}</div>
              </div>
              
              <div class="footer">
                Сообщение отправлено через форму обратной связи на сайте<br>
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
      subject: `Обратная связь от ${validatedData.fullName}`,
      html: htmlContent,
      text: `
Обратная связь от клиента

ФИО: ${validatedData.fullName}
Email: ${validatedData.email}
Телефон: ${validatedData.phone}
Сообщение: ${validatedData.message}

Дата: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
      `,
    });

    return NextResponse.json(
      { message: 'Feedback sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending feedback:', error);

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
        error: 'Failed to send feedback',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
