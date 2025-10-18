import { Header } from '@/widgets/Header';
import { VacancyCardList } from '@/widgets/VacancyCardList';

import styles from './page.module.scss';

export default function VacanciesPage() {
  return (
    <>
      <Header />
      <main className={styles.vacanciesPage}>
        <section className={styles.heroSection}>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>Стань частью нашей команды!</h1>
            <VacancyCardList />
          </div>
        </section>
      </main>
    </>
  );
}
