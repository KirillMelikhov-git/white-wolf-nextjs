'use client';

import { Cat, Syringe, Tag, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import styles from './PromoNotification.module.scss';

export const PromoNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    setIsMounted(true);

    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => {
      clearTimeout(showTimer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {isVisible && (
        <>
          <div className={styles.overlay} onClick={handleClose} />
          <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Акции">
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Закрыть"
              type="button"
            >
              <X size={18} strokeWidth={2} />
            </button>

            <div className={styles.header}>
              <Tag size={18} strokeWidth={2} />
              <span>Акции</span>
            </div>

            <div className={styles.cards}>
              {/* Карточка 1: Кастрация кошки */}
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <Cat size={28} strokeWidth={1.5} />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardTitle}>Стерилизация кошки</p>
                  <div className={styles.priceRow}>
                    <span className={styles.oldPrice}>10&nbsp;000&nbsp;₽</span>
                    <span className={styles.newPrice}>8&nbsp;000&nbsp;₽</span>
                  </div>
                </div>
              </div>

              <div className={styles.divider} />

              {/* Карточка 2: Стрижка когтей */}
              <div className={styles.card}>
                <div className={`${styles.cardIcon} ${styles.cardIconGreen}`}>
                  <Syringe size={28} strokeWidth={1.5} />
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardTitle}>
                    При вакцинации кошек и собак
                  </p>
                  <p className={styles.cardPromo}>
                    Стрижка когтей&nbsp;
                    <span className={styles.freeLabel}>бесплатно</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
