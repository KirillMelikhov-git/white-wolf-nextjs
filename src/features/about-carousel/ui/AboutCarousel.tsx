'use client';

import Link from 'next/link';

import { aboutSliders } from '@/entities/about-slide/model';
import { Carousel } from '@/shared/ui/Carousel';

import styles from './AboutCarousel.module.scss';

export const AboutCarousel = () => {
  return (
    <section className={styles.section} aria-label="О нас">
      <Carousel
        items={aboutSliders}
        getKey={(s) => s.id}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        renderItem={(slide) => (
          <div className={styles.slide}>
            <img
              className={`${styles.image} swiper-lazy`}
              src={slide.image}
              alt={slide.title}
              loading="lazy"
              width={1200}
              height={675}
            />
            <div className={styles.text}>
              <h3>{slide.title}</h3>
              <p>
                {slide.description}
                {slide.link && (
                  <Link href={slide.link.to} className="vacLink">
                    {slide.link.text}
                  </Link>
                )}
              </p>
            </div>
          </div>
        )}
        autoplay
        loop
      />
    </section>
  );
};
