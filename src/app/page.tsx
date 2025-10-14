import { AboutCarousel } from '@/features/about-carousel';
import { AppointmentSection } from '@/widgets/AppointmentSection';
import { CardList } from '@/widgets/CardList';
import { Header } from '@/widgets/Header';
import { WorkersList } from '@/widgets/WorkersList';

import styles from './page.module.scss';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.homePage}>
        <section className={styles.heroSection}>
          <div className={styles.contentContainer}>
            <AboutCarousel />
            <CardList />
            <WorkersList />
            <AppointmentSection />
          </div>
        </section>
      </main>
    </>
  );
}
