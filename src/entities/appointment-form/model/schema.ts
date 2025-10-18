import { z } from 'zod';

export const appointmentFormSchema = z.object({
  fullName: z
    .string()
    .min(1, 'ФИО обязательно для заполнения')
    .min(5, 'Введите полное ФИО (минимум 5 символов)')
    .refine((value) => value.trim().split(/\s+/).length >= 2, {
      message: 'Введите имя и фамилию',
    }),

  phone: z
    .string()
    .min(1, 'Телефон обязателен для заполнения')
    .regex(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Введите корректный номер телефона'
    ),

  email: z
    .string()
    .min(1, 'Email обязателен для заполнения')
    .email('Введите корректный email адрес'),

  petName: z
    .string()
    .min(1, 'Кличка животного обязательна для заполнения')
    .min(2, 'Кличка должна содержать минимум 2 символа')
    .max(50, 'Кличка не должна превышать 50 символов'),

  description: z
    .string()
    .min(1, 'Описание проблемы обязательно для заполнения')
    .min(10, 'Описание должно содержать минимум 10 символов')
    .max(1000, 'Описание не должно превышать 1000 символов'),
});

export type AppointmentFormSchema = z.infer<typeof appointmentFormSchema>;
