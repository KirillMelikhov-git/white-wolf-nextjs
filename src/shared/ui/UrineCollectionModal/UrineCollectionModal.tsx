'use client';

import { Modal } from '@/shared/ui/Modal';

import styles from './UrineCollectionModal.module.scss';

export interface UrineCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UrineCollectionModal = ({
  isOpen,
  onClose,
}: UrineCollectionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.icon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.headerText}>
              <h2 className={styles.title}>Инструкция по сбору мочи</h2>
              <p className={styles.subtitle}>
                Правильный сбор мочи важен для точной диагностики
              </p>
            </div>
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

        <div className={styles.sections}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Подготовка к сбору</h3>
            <ul className={styles.list}>
              <li>Подготовьте чистую ёмкость (контейнер или банку)</li>
              <li>Промойте ёмкость кипятком и высушите</li>
              <li>Не используйте моющие средства с запахом</li>
              <li>Соберите мочу утром, натощак</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Способы сбора</h3>
            <div className={styles.methods}>
              <div className={styles.method}>
                <h4 className={styles.methodTitle}>Для кошек</h4>
                <ul className={styles.list}>
                  <li>Используйте чистый лоток без наполнителя</li>
                  <li>Или подложите под лоток полиэтиленовый пакет</li>
                  <li>Соберите мочу пипеткой или шприцем</li>
                </ul>
              </div>

              <div className={styles.method}>
                <h4 className={styles.methodTitle}>Для собак</h4>
                <ul className={styles.list}>
                  <li>Подставьте контейнер во время мочеиспускания</li>
                  <li>Соберите среднюю порцию мочи</li>
                  <li>Избегайте попадания первых капель</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Важные моменты</h3>
            <ul className={styles.list}>
              <li>Объём мочи: минимум 5-10 мл</li>
              <li>Доставьте в клинику в течение 2-3 часов</li>
              <li>Храните в прохладном месте</li>
              <li>Не замораживайте образец</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Что НЕ делать</h3>
            <ul className={styles.warningList}>
              <li>Не собирайте мочу с пола или земли</li>
              <li>Не используйте грязную посуду</li>
              <li>Не смешивайте с водой или другими жидкостями</li>
              <li>Не оставляйте на солнце</li>
            </ul>
          </section>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            При возникновении вопросов обращайтесь к ветеринарному врачу
          </p>
        </div>
      </div>
    </Modal>
  );
};
