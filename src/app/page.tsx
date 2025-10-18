import { AboutCarousel } from '@/features/about-carousel';
import { AppointmentSection } from '@/widgets/AppointmentSection';
import { CardList } from '@/widgets/CardList';
import { FeedbackSection } from '@/widgets/FeedbackSection';
import { Footer } from '@/widgets/Footer';
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
            <FeedbackSection />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
