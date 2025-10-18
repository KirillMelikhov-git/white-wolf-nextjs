'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Textarea } from '@/shared/ui/Textarea';
import { SuccessModal } from '@/shared/ui/SuccessModal';

import { appointmentFormSchema, AppointmentFormSchema } from '../model/schema';

import styles from './AppointmentForm.module.scss';

export const AppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<AppointmentFormSchema>({
    resolver: zodResolver(appointmentFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: AppointmentFormSchema) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-appointment', {
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
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
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

        <div className={styles.inputWrapper}>
          <label htmlFor="phone" className={styles.label}>
            Контактный телефон
            <span className={styles.required}>*</span>
          </label>
          <IMaskInput
            id="phone"
            mask="+7 (000) 000-00-00"
            placeholder="+7 (___) ___-__-__"
            className={`${styles.input} ${errors.phone ? styles.error : ''} ${
              isPhoneFocused ? styles.focused : ''
            }`}
            onAccept={(value) =>
              setValue('phone', value, { shouldValidate: true })
            }
            onFocus={() => setIsPhoneFocused(true)}
            onBlur={() => setIsPhoneFocused(false)}
          />
          {errors.phone && (
            <span className={styles.errorMessage}>{errors.phone.message}</span>
          )}
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="example@mail.ru"
          error={errors.email?.message}
          {...register('email')}
          required
        />

        <Input
          label="Кличка животного"
          placeholder="Барсик"
          error={errors.petName?.message}
          {...register('petName')}
          required
        />
      </div>

      <Textarea
        label="Описание проблемы"
        placeholder="Опишите, что беспокоит вашего питомца..."
        error={errors.description?.message}
        {...register('description')}
        required
        rows={5}
      />

      <Button
        type="submit"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        fullWidth
      >
        Записаться на приём
      </Button>

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          ✗ Произошла ошибка при отправке. Пожалуйста, попробуйте позже или
          свяжитесь с нами по телефону.
        </div>
      )}

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </form>
  );
};
