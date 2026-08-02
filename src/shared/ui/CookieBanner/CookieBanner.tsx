'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import {
  acceptCookieConsent,
  COOKIE_POLICY_URL,
  getCookieConsent,
} from '@/shared/lib/consent/cookieConsent';

import styles from './CookieBanner.module.scss';

export const CookieBanner = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (getCookieConsent() === 'accepted') {
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = useCallback(() => {
    acceptCookieConsent();
    setIsVisible(false);
  }, []);

  if (!isMounted || !isVisible) {
    return null;
  }

  return (
    <div
      className={styles.banner}
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление об использовании cookie"
    >
      <p className={styles.text}>
        Мы используем cookie, чтобы сайт работал стабильнее и чтобы понимать,
        как им пользуются. Продолжая пользоваться сайтом, вы соглашаетесь с
        этим.{' '}
        <Link href={COOKIE_POLICY_URL} className={styles.link}>
          Политика cookie
        </Link>
      </p>
      <button type="button" className={styles.button} onClick={handleAccept}>
        Понятно
      </button>
    </div>
  );
};
