'use client';

import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { FeedbackForm } from '@/widgets/FeedbackForm';

import styles from './FeedbackModal.module.scss';

export interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.icon}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className={styles.title}>Обратная связь</h2>
          <p className={styles.subtitle}>
            Мы ценим ваше мнение и готовы выслушать любые предложения по
            улучшению качества обслуживания
          </p>
        </div>

        <div className={styles.formContainer}>
          <FeedbackForm />
        </div>
      </div>
    </Modal>
  );
};
