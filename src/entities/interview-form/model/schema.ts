import { z } from 'zod';

export const interviewFormSchema = z.object({
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

  position: z
    .string()
    .min(1, 'Выберите должность')
    .refine(
      (value) => ['veterinarian', 'assistant', 'administrator'].includes(value),
      {
        message: 'Выберите корректную должность',
      }
    ),

  experience: z
    .string()
    .min(1, 'Опыт работы обязателен для заполнения')
    .min(5, 'Опишите ваш опыт работы (минимум 5 символов)')
    .max(1000, 'Описание опыта не должно превышать 1000 символов'),
});

export type InterviewFormSchema = z.infer<typeof interviewFormSchema>;
