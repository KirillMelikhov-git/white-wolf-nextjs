import { Metadata } from 'next';

import { Header } from '@/widgets/Header';

import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Подготовка к визиту | White Wolf Veterinary Clinic',
  description:
    'Информация о том, как подготовиться к визиту в ветеринарную клинику White Wolf',
};

export default function BeforeVisitPage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>Подготовка к визиту</h1>
            <h2 className={styles.subtitle}>
              Наш приоритет - здоровье Ваших питомцев и Ваше время! Пожалуйста,
              ознакомьтесь с информацией ниже, это поможет быстрее и эффективнее
              решить проблему.
            </h2>
          </div>

          <div className={styles.sections}>
            <section className={styles.section}>
              <div className={styles.sectionIconAndTitle}>
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
              </div>
              <div className={styles.sectionContent}>
                <ul className={styles.list}>
                  <li>Ваш паспорт</li>
                  <li>Ветеринарный паспорт животного (если есть)</li>
                  <li>Назначения, анализы из других клиник (если есть)</li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionIconAndTitle}>
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
                <h2 className={styles.sectionTitle}>Подготовка животного</h2>
              </div>
              <div className={styles.sectionContent}>
                <ul className={styles.list}>
                  <li>Не кормите животное за 2-3 часа до визита</li>
                  <li>Соблюдайте обычный режим питья</li>
                  <li>Избегайте стрессовых ситуаций перед визитом</li>
                  <li>
                    Желательно использовать поводок и намордник.
                    <br /> В клинике могут находиться другие животные, а в
                    незнакомом месте лучше обезопасить себя и других посетителей
                  </li>
                  <li>
                    Когда проблема связана с выделениями из ушей и глаз, не
                    нужно убирать эти выделения перед визитом к врачу
                  </li>
                  <li>
                    В случае проблем с ЖКТ, важно сообщить врачу полный рацион
                    животного
                  </li>
                  <li>
                    В случае отравления животного, очень важно знать, чем
                    отравилось животное и когда это произошло
                  </li>
                  <li>
                    Когда у Вашего питомца проблемы, связанные с
                    мочеиспусканием, например, Вы заметили кровь в моче,
                    постарайтесь собрать мочу на анализ
                  </li>
                  <li>
                    Если у Вашего питомца полностью отсутствует мочеиспускание и
                    он часто присаживается в лоток — необходимо СРОЧНО
                    обратиться в клинику, так как это состояние, угрожающее
                    жизни животного.
                  </li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <div className={styles.sectionIconAndTitle}>
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
              </div>
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
              <div className={styles.sectionIconAndTitle}>
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
              </div>
              <div className={styles.contact}>
                <p>Если у вас есть вопросы, звоните нам:</p>
                <p className={styles.phone}>+7 (XXX) XXX-XX-XX</p>
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
    </>
  );
}
