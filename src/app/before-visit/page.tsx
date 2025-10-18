import { Metadata } from 'next';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Подготовка к визиту | White Wolf Veterinary Clinic',
  description:
    'Информация о том, как подготовиться к визиту в ветеринарную клинику White Wolf',
};

export default function BeforeVisitPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Подготовка к визиту</h1>
          <p className={styles.subtitle}>
            Ваша заявка принята! Вот что нужно знать перед визитом в клинику
          </p>
        </div>

        <div className={styles.sections}>
          <section className={styles.section}>
            <div className={styles.sectionIcon}>
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
            <h2 className={styles.sectionTitle}>Что взять с собой</h2>
            <ul className={styles.list}>
              <li>Ветеринарный паспорт животного (если есть)</li>
              <li>Предыдущие результаты анализов и рентгеновские снимки</li>
              <li>Список принимаемых лекарств</li>
              <li>Любимое лакомство для поощрения</li>
              <li>Переноску для мелких животных</li>
            </ul>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className={styles.sectionTitle}>Подготовка животного</h2>
            <ul className={styles.list}>
              <li>Не кормите животное за 2-3 часа до визита</li>
              <li>Соблюдайте обычный режим питья</li>
              <li>Избегайте стрессовых ситуаций перед визитом</li>
              <li>При необходимости возьмите поводок или намордник</li>
            </ul>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <polyline
                  points="12,6 12,12 16,14"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h2 className={styles.sectionTitle}>Время приёма</h2>
            <div className={styles.info}>
              <p>
                Пожалуйста, приходите за 5-10 минут до назначенного времени.
              </p>
              <p>
                Если вы опоздаете более чем на 15 минут, приём может быть
                перенесён.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className={styles.sectionTitle}>Контакты</h2>
            <div className={styles.contact}>
              <p>Если у вас есть вопросы, звоните нам:</p>
              <p className={styles.phone}>+7 (XXX) XXX-XX-XX</p>
              <p className={styles.email}>info@whitewolf-clinic.ru</p>
            </div>
          </section>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Мы заботимся о здоровье ваших питомцев и ждём встречи с вами!
          </p>
        </div>
      </div>
    </div>
  );
}
