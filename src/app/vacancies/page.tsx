import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { InterviewForm } from '@/widgets/InterviewForm';
import { VacancyCardList } from '@/widgets/VacancyCardList';
import { WorkBenefitsList } from '@/widgets/WorkBenefitsList';

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

            <div className={styles.locationInfo}>
              <p className={styles.locationText}>
                Территориально мы находимся в Рощино, но до нас очень просто и
                быстро добраться! 25 минут на ласточке от Санкт-Петербурга до
                клиники
              </p>
            </div>

            <WorkBenefitsList />

            <section className={styles.interviewSection}>
              <div className={styles.interviewHeader}>
                <h2 className={styles.interviewTitle}>
                  Запись на собеседование
                </h2>
                <p className={styles.interviewSubtitle}>
                  Заполните форму, и мы свяжемся с вами в ближайшее время для
                  назначения собеседования
                </p>
              </div>
              <InterviewForm />
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
