'use client';

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
          <div className={styles.headerText}>
            <h2 className={styles.title}>Обратная связь</h2>
            <p className={styles.subtitle}>
              Мы ценим ваше мнение и готовы выслушать любые предложения по
              улучшению качества обслуживания
            </p>
          </div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Закрыть"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className={styles.formContainer}>
          <FeedbackForm />
        </div>
      </div>
    </Modal>
  );
};
