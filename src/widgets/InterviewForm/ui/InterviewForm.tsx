'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

import {
  interviewFormSchema,
  InterviewFormSchema,
} from '@/entities/interview-form/model/schema';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { InterviewSuccessModal } from '@/shared/ui/InterviewSuccessModal';
import { Textarea } from '@/shared/ui/Textarea';

import styles from './InterviewForm.module.scss';

export function InterviewForm() {
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
  } = useForm<InterviewFormSchema>({
    resolver: zodResolver(interviewFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: InterviewFormSchema) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-interview', {
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

        <div className={styles.inputWrapper}>
          <label htmlFor="position" className={styles.label}>
            Должность
            <span className={styles.required}>*</span>
          </label>
          <select
            id="position"
            className={`${styles.input} ${errors.position ? styles.error : ''}`}
            {...register('position')}
            required
          >
            <option value="">Выберите должность</option>
            <option value="veterinarian">Ветеринарный врач</option>
            <option value="assistant">Ассистент ветеринарного врача</option>
            <option value="administrator">Администратор</option>
          </select>
          {errors.position && (
            <span className={styles.errorMessage}>
              {errors.position.message}
            </span>
          )}
        </div>
      </div>

      <Textarea
        label="Опыт работы"
        placeholder="Опишите ваш опыт работы в ветеринарии..."
        error={errors.experience?.message}
        {...register('experience')}
        required
        rows={5}
      />

      <Button
        type="submit"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        className={styles.submitButton}
      >
        {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
      </Button>

      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          Произошла ошибка при отправке заявки. Попробуйте еще раз.
        </div>
      )}

      <InterviewSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />
    </form>
  );
}
