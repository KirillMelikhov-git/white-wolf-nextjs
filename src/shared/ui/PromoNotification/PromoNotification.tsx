'use client';

import { Cat, Dog, Tag, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './PromoNotification.module.scss';

const CAT_PHOTO = '/images/promo-cat.webp';
const DOG_PHOTO = '/images/promo-dog.webp';

type ModalState = 'hidden' | 'open' | 'closing' | 'minimized';

const PromoCard = ({
  photoSrc,
  placeholderIcon,
  title,
  children,
  imageAlt,
}: {
  photoSrc: string;
  placeholderIcon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  imageAlt: string;
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrap}>
        {imgError ? (
          <div className={styles.cardImagePlaceholder}>{placeholderIcon}</div>
        ) : (
          <Image
            src={photoSrc}
            alt={imageAlt}
            fill
            className={styles.cardImage}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardTitle}>{title}</p>
        {children}
      </div>
    </div>
  );
};

export const PromoNotification = () => {
  const [modalState, setModalState] = useState<ModalState>('hidden');

  const handleClose = () => {
    setModalState('closing');
    setTimeout(() => setModalState('minimized'), 380);
  };

  const handleOpen = () => {
    setModalState('open');
  };

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setModalState('open');
    }, 600);

    return () => clearTimeout(showTimer);
  }, []);

  const isModalVisible = modalState === 'open' || modalState === 'closing';

  return (
    <>
      {/* Плавающий значок */}
      {modalState === 'minimized' && (
        <button
          className={styles.floatingButton}
          onClick={handleOpen}
          aria-label="Открыть акции"
          type="button"
        >
          <Tag size={20} strokeWidth={2} />
          <span className={styles.badge}>1</span>
        </button>
      )}

      {/* Модалка */}
      {isModalVisible && (
        <>
          <div
            className={`${styles.overlay} ${modalState === 'closing' ? styles.overlayClosing : ''}`}
            onClick={handleClose}
          />
          <div
            className={`${styles.modal} ${modalState === 'closing' ? styles.modalClosing : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Акции"
          >
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Закрыть"
              type="button"
            >
              <X size={18} strokeWidth={2} />
            </button>

            <div className={styles.header}>
              <Tag size={20} strokeWidth={2} />
              <span>Весенняя акция</span>
              <Tag size={20} strokeWidth={2} />
            </div>

            <div className={styles.cards}>
              <PromoCard
                photoSrc={CAT_PHOTO}
                placeholderIcon={<Cat size={40} strokeWidth={1.5} />}
                title="Лапраскопическая стерилизация кошки"
                imageAlt="Лапраскопическая стерилизация кошки"
              >
                <div className={styles.priceBlock}>
                  <div className={styles.wasLabel}>Было</div>
                  <div className={styles.priceRow}>
                    <span className={styles.oldPrice}>10&nbsp;000&nbsp;₽</span>
                    <span className={styles.arrow}>→</span>
                    <span className={styles.newPrice}>8&nbsp;000&nbsp;₽</span>
                  </div>
                  <div className={styles.saveBadge}>Экономия 2&nbsp;000&nbsp;₽ · −20%</div>
                </div>
              </PromoCard>

              <PromoCard
                photoSrc={DOG_PHOTO}
                placeholderIcon={<Dog size={40} strokeWidth={1.5} />}
                title="При вакцинации кошек и собак"
                imageAlt="Вакцинация"
              >
                <p className={styles.cardPromo}>
                  Стрижка когтей&nbsp;
                  <span className={styles.freeLabel}>бесплатно</span>
                </p>
              </PromoCard>
            </div>
          </div>
        </>
      )}
    </>
  );
};
