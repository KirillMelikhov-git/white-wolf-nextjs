'use client';

import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';

import styles from './InterviewSuccessModal.module.scss';

export interface InterviewSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InterviewSuccessModal = ({
  isOpen,
  onClose,
}: InterviewSuccessModalProps) => {
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

        <h2 className={styles.title}>Заявка на собеседование отправлена!</h2>

        <p className={styles.message}>
          Спасибо за интерес к работе в нашей клинике! Мы свяжемся с вами в
          ближайшее время для назначения собеседования.
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
