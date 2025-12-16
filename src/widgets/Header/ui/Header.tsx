'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import { useScrollDirection } from '@/shared/hooks/useScrollDirection';
import { BurgerButton } from '@/shared/ui/BurgerButton';
import { Logo } from '@/shared/ui/Logo';

import styles from './Header.module.scss';
import { SocialLinks } from './SocialLinks';

export function Header() {
  const { scrollDirection, isScrolled } = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Закрываем меню при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleContactsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header
      className={`${styles.header} ${
        scrollDirection === 'down' ? styles.headerHidden : ''
      } ${isScrolled ? styles.headerScrolled : ''}`}
    >
      <div className={styles.containerLogo}>
        <Link href="/" className={styles.navLink} onClick={handleLinkClick}>
          <Logo size="md" className={styles.logoImg} />
        </Link>
        <Link href="/" className={styles.navLink} onClick={handleLinkClick}>
          <span className={styles.logoText}>Белый волк</span>
        </Link>
      </div>

      <div className={styles.mobileTitle}>
        <Link href="/" className={styles.navLink} onClick={handleLinkClick}>
          <span>Белый волк</span>
        </Link>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <ul className={styles.menu}>
          <li>
            <Link
              href="/services"
              className={styles.navLink}
              onClick={handleLinkClick}
            >
              Услуги
            </Link>
          </li>
          <li>
            <Link
              href="/before-visit"
              className={styles.navLink}
              onClick={handleLinkClick}
            >
              До визита в клинику
            </Link>
          </li>
          <li>
            <Link
              href="/vacancies"
              className={styles.navLink}
              onClick={handleLinkClick}
            >
              Вакансии
            </Link>
          </li>
          <li>
            <Link
              href="/documents"
              className={styles.navLink}
              onClick={handleLinkClick}
            >
              Документы
            </Link>
          </li>
          <li>
            <Link
              href="#footer"
              className={styles.navLink}
              onClick={handleContactsClick}
            >
              Контакты
            </Link>
          </li>
        </ul>

        <div className={styles.mobileSocialLinks}>
          <SocialLinks />
        </div>
      </nav>

      <div className={styles.desktopSocialLinks}>
        <SocialLinks />
      </div>

      <BurgerButton
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </header>
  );
}
