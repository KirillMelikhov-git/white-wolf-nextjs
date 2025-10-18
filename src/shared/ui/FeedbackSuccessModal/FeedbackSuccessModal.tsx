'use client';

import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';

import styles from './FeedbackSuccessModal.module.scss';

export interface FeedbackSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackSuccessModal = ({
  isOpen,
  onClose,
}: FeedbackSuccessModalProps) => {
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

        <h2 className={styles.title}>Обратная связь отправлена!</h2>

        <p className={styles.message}>
          Спасибо за ваше сообщение! Мы рассмотрим ваши замечания и предложения.
          Владелец клиники лично изучит ваше обращение и примет необходимые
          меры.
        </p>

        <div className={styles.actions}>
          <Button onClick={onClose} className={styles.closeButton}>
            Закрыть
          </Button>
        </div>
      </div>
    </Modal>
  );
};
