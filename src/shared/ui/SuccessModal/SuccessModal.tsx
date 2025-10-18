'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';

import styles from './SuccessModal.module.scss';

export interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) return;

    setCountdown(5);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/before-visit');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, router]);

  const handleRedirect = () => {
    router.push('/before-visit');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#38a169" />
            <path
              d="M9 12l2 2 4-4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h2 className={styles.title}>Заявка успешно отправлена!</h2>

        <p className={styles.message}>
          Спасибо за обращение! Мы свяжемся с вами в ближайшее время для
          подтверждения записи на приём.
        </p>

        <div className={styles.countdown}>
          <p className={styles.countdownText}>
            Перенаправление на страницу подготовки к визиту через:
          </p>
          <div className={styles.timer}>
            <span className={styles.timerNumber}>{countdown}</span>
            <span className={styles.timerText}>
              {countdown === 1
                ? 'секунду'
                : countdown < 5
                  ? 'секунды'
                  : 'секунд'}
            </span>
          </div>
        </div>

        <div className={styles.actions}>
          <Button
            variant="secondary"
            onClick={onClose}
            className={styles.cancelButton}
          >
            Остаться на странице
          </Button>
          <Button onClick={handleRedirect} className={styles.redirectButton}>
            Перейти сейчас
          </Button>
        </div>
      </div>
    </Modal>
  );
};
