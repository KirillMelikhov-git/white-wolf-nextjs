'use client';

import { useState } from 'react';

import { InteractiveText } from '@/shared/ui/InteractiveText';
import { PrepaymentInfo } from '@/shared/ui/PrepaymentInfo';
import { UrineCollectionModal } from '@/shared/ui/UrineCollectionModal';
import { VisitingRules } from '@/shared/ui/VisitingRules';
import { WarningText } from '@/shared/ui/WarningText';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import styles from './page.module.scss';

export default function BeforeVisitPage() {
  const [isUrineModalOpen, setIsUrineModalOpen] = useState(false);

  const handleUrineCollectionClick = () => {
    setIsUrineModalOpen(true);
  };
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
            <div className={styles.contractInfo}>
              <p className={styles.contractText}>
                Также предлагаем Вам ознакомиться с{' '}
                <a
                  href="https://docs.google.com/document/d/18Q5MHFUCDW_5eItbNn416HRhzCzw5LTT/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contractLink}
                >
                  договором на оказание услуг
                </a>
              </p>
            </div>
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
                    постарайтесь{' '}
                    <InteractiveText onClick={handleUrineCollectionClick}>
                      собрать мочу на анализ
                    </InteractiveText>
                  </li>
                  <li>
                    Если у Вашего питомца полностью{' '}
                    <WarningText>отсутствует мочеиспускание</WarningText> и он
                    часто присаживается в лоток — необходимо{' '}
                    <WarningText>СРОЧНО</WarningText> обратиться в клинику, это
                    состояние, угрожающее жизни животного!
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
                  Приём ведётся <WarningText>СТРОГО</WarningText> по
                  предварительной записи.
                </p>
                <p>
                  Пожалуйста, приходите за 5-10 минут до назначенного времени.
                </p>
                <p>
                  Если вы опоздаете более чем на 15 минут, приём может быть
                  перенесён.
                </p>
              </div>
            </section>

            <h1 className={styles.rulesTitle}>Правила посещения</h1>
            <VisitingRules />

            <PrepaymentInfo />
          </div>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Мы заботимся о здоровье ваших питомцев и ждём встречи с вами!
            </p>
          </div>
        </div>
      </div>

      <UrineCollectionModal
        isOpen={isUrineModalOpen}
        onClose={() => setIsUrineModalOpen(false)}
      />
      <Footer />
    </>
  );
}
