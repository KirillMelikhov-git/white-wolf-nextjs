'use client';

import { useEffect, useState } from 'react';

import styles from './TechnicalNotification.module.scss';

export const TechnicalNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    setIsMounted(true);

    // Небольшая задержка перед показом для плавного появления
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      clearTimeout(showTimer);
    };
  }, []);

  // Не рендерим на сервере
  if (!isMounted) return null;

  return (
    <>
      {isVisible && (
        <>
          <div className={styles.overlay} onClick={handleClose} />
          <div className={styles.notification}>
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Закрыть уведомление"
              type="button"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className={styles.content}>
              <div className={styles.icon}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18C1.64537 18.3024 1.55296 18.6453 1.55199 18.9945C1.55101 19.3437 1.64151 19.6871 1.81445 19.9905C1.98738 20.2939 2.23675 20.5467 2.53773 20.7239C2.83871 20.901 3.18082 20.9962 3.53 21H20.47C20.8192 20.9962 21.1613 20.901 21.4623 20.7239C21.7633 20.5467 22.0126 20.2939 22.1856 19.9905C22.3585 19.6871 22.449 19.3437 22.448 18.9945C22.447 18.6453 22.3546 18.3024 22.18 18L13.71 3.86C13.5317 3.56611 13.2807 3.32312 12.9812 3.15448C12.6817 2.98585 12.3437 2.89725 12 2.89725C11.6563 2.89725 11.3183 2.98585 11.0188 3.15448C10.7193 3.32312 10.4683 3.56611 10.29 3.86Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className={styles.text}>
                <h3 className={styles.title}>Внимание!</h3>
                <p className={styles.description}>
                  24 декабря 2025 года клиника не работает по техническим
                  причинам.
                </p>
                <p className={styles.subdescription}>
                  Приносим извинения за доставленные неудобства. Будем рады
                  видеть вас в другие дни!
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
