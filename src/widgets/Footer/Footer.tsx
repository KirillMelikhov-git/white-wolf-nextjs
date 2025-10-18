'use client';

import { useState } from 'react';

import { YandexMapModal } from '../../shared/ui/YandexMapModal';

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
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.infoSection}>
              <h3 className={styles.title}>Белый волк</h3>
              <p className={styles.description}>
                Ветеринарная клиника с заботой о ваших питомцах
              </p>
            </div>

            <div className={styles.socialSection}>
              <h3 className={styles.title}>Мы в соцсетях</h3>
              <div className={styles.socialIcons}>
                {/* TODO: Добавить иконки соцсетей */}
                <div className={styles.socialPlaceholder}>
                  <span>Социальные сети</span>
                </div>
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
        coordinates={[60.2512125, 30.2656504]}
      />
    </>
  );
};
