'use client';

import { Cat, Dog, Tag, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import styles from './PromoNotification.module.scss';

const CAT_PHOTO = '/images/promo-cat.webp';
const DOG_PHOTO = '/images/promo-dog.webp';

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
              <PromoCard
                photoSrc={CAT_PHOTO}
                placeholderIcon={<Cat size={40} strokeWidth={1.5} />}
                title="Стерилизация кошки"
                imageAlt="Стерилизация кошки"
              >
                <div className={styles.priceRow}>
                  <span className={styles.oldPrice}>10&nbsp;000&nbsp;₽</span>
                  <span className={styles.newPrice}>8&nbsp;000&nbsp;₽</span>
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
