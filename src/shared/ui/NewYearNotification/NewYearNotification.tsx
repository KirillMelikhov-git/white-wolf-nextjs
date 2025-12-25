'use client';

import styles from './NewYearNotification.module.scss';

export const NewYearNotification = () => {
  return (
    <div className={styles.notification}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.title}>График работы в новогодние праздники</h3>
          <div className={styles.schedule}>
            <div className={styles.scheduleItem}>
              <span className={styles.date}>31.12.2025</span>
              <span className={styles.divider}>—</span>
              <span className={styles.time}>09:00 - 15:00</span>
            </div>
            <div className={styles.scheduleItem}>
              <span className={styles.date}>01.01 - 02.01</span>
              <span className={styles.divider}>—</span>
              <span className={styles.closed}>Не работаем</span>
            </div>
            <div className={styles.scheduleItem}>
              <span className={styles.date}>03.01.2026</span>
              <span className={styles.divider}>—</span>
              <span className={styles.time}>Штатный режим</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
