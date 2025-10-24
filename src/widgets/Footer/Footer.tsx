'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Instagram, Telegram, VK } from '@/shared/ui/Icons';
import { YandexMapModal } from '@/shared/ui/YandexMapModal';

import styles from './Footer.module.scss';

export const Footer = () => {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const handleMapClick = () => {
    setIsMapModalOpen(true);
  };

  const handleCloseMapModal = () => {
    setIsMapModalOpen(false);
  };

  return (
    <>
      <footer id="footer" className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.infoSection}>
              <h3 className={styles.title}>Белый волк</h3>
              <p className={styles.description}>
                +7 (812) 996-30-00 <br />
                +7 (921) 304-62-22 <br />
                vetwolf2019@mail.ru
              </p>
            </div>

            <div className={styles.socialSection}>
              <h3 className={styles.title}>Мы в соцсетях</h3>
              <div className={styles.socialIcons}>
                <Link
                  href="https://www.instagram.com/vetwolf_?igsh=cGhpbGFuYWM2Z2lk"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram />
                </Link>

                <Link
                  href="https://vk.com/vetwolf2019"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="VK"
                >
                  <VK />
                </Link>

                <Link
                  href="https://t.me/your_clinic"
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <Telegram />
                </Link>
              </div>
            </div>

            <div className={styles.addressSection}>
              <h3 className={styles.title}>Наш адрес</h3>
              <p className={styles.address}>пгт. Рощино, ул. Советская, 4</p>
              <button
                className={styles.mapButton}
                onClick={handleMapClick}
                type="button"
              >
                📍 посмотреть на карте
              </button>
            </div>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © 2025 Белый волк. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      <YandexMapModal
        isOpen={isMapModalOpen}
        onClose={handleCloseMapModal}
        address="пгт. Рощино, ул. Советская, 4"
        coordinates={[60.258207, 29.598024]}
      />
    </>
  );
};
