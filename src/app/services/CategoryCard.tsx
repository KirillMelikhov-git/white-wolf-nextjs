'use client';

import { useInViewAnimation } from '@/shared/hooks';
import { type ServiceCategory } from '@/entities/service';

import styles from './page.module.scss';

interface CategoryCardProps {
  category: ServiceCategory;
  onClick: (category: ServiceCategory) => void;
  categoryRef: (el: HTMLHeadingElement | null) => void;
}

export function CategoryCard({
  category,
  onClick,
  categoryRef,
}: CategoryCardProps) {
  const { ref, isInView } = useInViewAnimation<HTMLButtonElement>({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <button
      ref={ref}
      className={`${styles.categoryCard} ${isInView ? styles.inView : ''}`}
      onClick={() => onClick(category)}
    >
      <div className={styles.categoryIcon}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          {/* Медицинский крест */}
          <path d="M9 3H15V9H21V15H15V21H9V15H3V9H9V3Z" />
        </svg>
      </div>
      <h3 className={styles.categoryName} ref={categoryRef}>
        <span>{category.name}</span>
      </h3>
      <p className={styles.servicesCount}>
        {category.services.length}{' '}
        {category.services.length === 1
          ? 'услуга'
          : category.services.length < 5
            ? 'услуги'
            : 'услуг'}
      </p>
      <div className={styles.viewButton}>
        <span>Смотреть услуги</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </button>
  );
}
