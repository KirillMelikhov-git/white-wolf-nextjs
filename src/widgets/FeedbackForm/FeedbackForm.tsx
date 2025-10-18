'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { InterviewSuccessModal } from '@/shared/ui/InterviewSuccessModal';

import styles from './FeedbackForm.module.scss';

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
});

type FeedbackFormSchema = z.infer<typeof feedbackFormSchema>;

export const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FeedbackFormSchema>({
    resolver: zodResolver(feedbackFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: FeedbackFormSchema) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Ошибка отправки формы');
      }

      setSubmitStatus('success');
      setIsSuccessModalOpen(true);
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGrid}>
        <Input
          label="ФИО"
          placeholder="Иванов Иван Иванович"
          error={errors.fullName?.message}
          {...register('fullName')}
          required
        />

        <Input
          label="Email"
          type="email"
          placeholder="example@mail.ru"
          error={errors.email?.message}
          {...register('email')}
          required
        />

        <Input
          label="Телефон"
          placeholder="+7 (999) 999-99-99"
          error={errors.phone?.message}
          {...register('phone')}
          required
        />
      </div>

      <Textarea
        label="Ваше сообщение"
        placeholder="Опишите ваши замечания или предложения..."
        error={errors.message?.message}
        {...register('message')}
        required
        rows={5}
      />

      <Button
        type="submit"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        {isSubmitting ? 'Отправляем...' : 'Отправить обратную связь'}
      </Button>

      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          Обратная связь успешно отправлена! Мы рассмотрим ваше сообщение.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          Произошла ошибка при отправке. Попробуйте еще раз.
        </div>
      )}

      <InterviewSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </form>
  );
};
