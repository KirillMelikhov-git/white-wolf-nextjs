'use client';

import { useState } from 'react';

import { FeedbackModal } from '@/shared/ui/FeedbackModal';

import styles from './FeedbackSection.module.scss';

export const FeedbackSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className={styles.feedbackSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>Обратная связь</h2>
            <p className={styles.text}>
              Не понравились оказанные услуги? Есть предложения по улучшению
              качества обслуживания? Не торопитесь оставлять нам плохой отзыв,
              мы прислушиваемся к мнению каждого посетителя! Заполнив{' '}
              <button
                className={styles.formLink}
                onClick={handleFormClick}
                type="button"
              >
                эту форму
              </button>{' '}
              Ваше замечание увидит владелец клиники и лично решит Ваш вопрос.
            </p>
          </div>
        </div>
      </section>

      <FeedbackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
