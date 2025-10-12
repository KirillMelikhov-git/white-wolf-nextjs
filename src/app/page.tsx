import { AboutCarousel } from '@/features/about-carousel';
import { CardList } from '@/widgets/CardList';
import { Header } from '@/widgets/Header';

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
          </div>
        </section>
      </main>
    </>
  );
}
