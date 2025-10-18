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
          <h2 className={styles.title}>Обратная связь</h2>
          <p className={styles.subtitle}>
            Мы ценим ваше мнение и готовы выслушать любые предложения по
            улучшению качества обслуживания
          </p>
        </div>

        <FeedbackForm />
      </div>
    </Modal>
  );
};
