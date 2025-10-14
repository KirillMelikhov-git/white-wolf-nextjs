import { AppointmentForm } from '@/entities/appointment-form';

import styles from './AppointmentSection.module.scss';

export const AppointmentSection = () => {
  return (
    <section className={styles.appointmentSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Запись на приём</h2>
          <p className={styles.subtitle}>
            Заполните форму, и мы свяжемся с вами в ближайшее время для
            подтверждения записи
          </p>
        </div>
        <AppointmentForm />
      </div>
    </section>
  );
};
