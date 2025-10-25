'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

import styles from './VacancyNotification.module.scss';

const AUTO_CLOSE_DELAY = 15000; // 15 секунд

export const VacancyNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    // Показываем иконку после закрытия
    setTimeout(() => {
      setShowIcon(true);
    }, 300); // Задержка для плавности анимации
  }, []);

  const handleIconClick = useCallback(() => {
    setShowIcon(false);
    setHasNotification(false);
    // Небольшая задержка перед открытием
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  useEffect(() => {
    setIsMounted(true);

    // Небольшая задержка перед показом для плавного появления
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Автоматическое закрытие через 15 секунд
    const closeTimer = setTimeout(() => {
      handleClose();
    }, AUTO_CLOSE_DELAY + 1000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
  }, [handleClose]);

  // Не рендерим на сервере
  if (!isMounted) return null;

  return (
    <>
      {/* Круглая иконка-уведомление */}
      {showIcon && (
        <button
          className={styles.notificationIcon}
          onClick={handleIconClick}
          aria-label="Показать уведомление о вакансии"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 11L19 13L23 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {hasNotification && <span className={styles.badge}>1</span>}
        </button>
      )}

      {/* Основная модалка */}
      {isVisible && (
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 11L19 13L23 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className={styles.text}>
              <h3 className={styles.title}>Белый Волк ищет вет. врача</h3>
              <p className={styles.description}>
                Присоединяйтесь к нашей команде!
              </p>
            </div>

            <Link
              href="/vacancies"
              className={styles.link}
              onClick={handleClose}
            >
              Подробнее
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progressFill} />
          </div>
        </div>
      )}
    </>
  );
};
