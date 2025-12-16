import { DockCardList } from '@/widgets/DockCardList';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import styles from './page.module.scss';

export default function VacanciesPage() {
  return (
    <>
      <Header />
      <main className={styles.documentsPage}>
        <section className={styles.heroSection}>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>
              Предлагаем Вам ознакомиться с нашими документами
            </h1>
            <DockCardList />

            <div className={styles.locationInfo}>
              <p className={styles.locationText}>
                Уважаемые владельцы, просим Вас внимательно ознакомиться с
                вышеперечисленными документами перед посещением клиники
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
