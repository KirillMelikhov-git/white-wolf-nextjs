'use client';

import { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper/types';

import { SWIPER_DEFAULTS } from '@/shared/config/swiper';

import styles from './Carousel.module.scss';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  getKey?: (item: T, index: number) => string;
  slidesPerView?: number;
  breakpoints?: Record<number, { slidesPerView: number }>;
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
}

export function Carousel<T>({
  items,
  renderItem,
  getKey,
  slidesPerView = 1,
  breakpoints,
  className = '',
  autoplay = true,
  loop = true,
}: CarouselProps<T>) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperInstance | null>(
    null
  );

  // Обновляем навигацию после инициализации
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.navigation?.init();
      swiperInstance.navigation?.update();
    }
  }, [swiperInstance]);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <button
        ref={prevRef}
        className={`${styles.nav} ${styles.prev}`}
        aria-label="Предыдущий слайд"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      <Swiper
        modules={[...SWIPER_DEFAULTS.modules]}
        spaceBetween={SWIPER_DEFAULTS.spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
        loop={loop}
        autoplay={autoplay ? SWIPER_DEFAULTS.autoplay : false}
        a11y={SWIPER_DEFAULTS.a11y}
        keyboard={SWIPER_DEFAULTS.keyboard}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper: SwiperInstance) => {
          setSwiperInstance(swiper);
        }}
        className={styles.swiper}
      >
        {items.map((item, index) => (
          <SwiperSlide key={getKey ? getKey(item, index) : String(index)}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        ref={nextRef}
        className={`${styles.nav} ${styles.next}`}
        aria-label="Следующий слайд"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
}
