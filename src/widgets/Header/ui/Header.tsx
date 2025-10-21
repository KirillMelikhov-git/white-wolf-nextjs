'use client';

import Link from 'next/link';

import { useScrollDirection } from '@/shared/hooks/useScrollDirection';
import { Logo } from '@/shared/ui/Logo';

import styles from './Header.module.scss';

export function Header() {
  const { scrollDirection, isScrolled } = useScrollDirection();

  return (
    <header
      className={`${styles.header} ${
        scrollDirection === 'down' ? styles.headerHidden : ''
      } ${isScrolled ? styles.headerScrolled : ''}`}
    >
      <div className={styles.containerLogo}>
        <Link href="/" className={styles.navLink}>
          <Logo size="md" className={styles.logoImg} />
        </Link>
        <Link href="/" className={styles.navLink}>
          <span>Белый волк</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link href="/services" className={styles.navLink}>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/before-visit" className={styles.navLink}>
              До визита в клинику
            </Link>
          </li>
          <li>
            <Link href="/vacancies" className={styles.navLink}>
              Вакансии
            </Link>
          </li>
          <li>
            <Link href="#footer" className={styles.navLink}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
