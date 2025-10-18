import { Header } from '@/widgets/Header';

import styles from './page.module.scss';

export default function VacanciesPage() {
  return (
    <>
      <Header />
      <main className={styles.vacanciesPage}>
        <section className={styles.heroSection}>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>Вакансии</h1>
            <p className={styles.subtitle}>
              Присоединяйтесь к нашей команде профессионалов
            </p>
            {/* Здесь будет контент с вакансиями */}
          </div>
        </section>
      </main>
    </>
  );
}
