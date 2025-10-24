'use client';

import { useEffect } from 'react';

import { useInViewAnimation } from '@/shared/hooks';

import { type Service } from '@/entities/service';

import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  service: Service;
  isActive?: boolean;
  onInView?: (id: string) => void;
  onOutView?: (id: string) => void;
}

export function ServiceCard({
  service,
  isActive = false,
  onInView,
  onOutView,
}: ServiceCardProps) {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>({
    threshold: 0.4,
    rootMargin: '-10% 0px -45% 0px',
    triggerOnce: false,
  });

  useEffect(() => {
    if (isInView && onInView) {
      onInView(service.id);
    } else if (!isInView && onOutView) {
      onOutView(service.id);
    }
  }, [isInView, service.id, onInView, onOutView]);

  // Если есть управление извне (isActive), используем его, иначе используем isInView
  const shouldHighlight = onInView !== undefined ? isActive : isInView;

  return (
    <div
      ref={ref}
      className={`${styles.serviceCard} ${shouldHighlight ? 'inView' : ''}`}
    >
      <div className={styles.serviceInfo}>
        <h3 className={styles.serviceName}>{service.name}</h3>
        <div className={styles.servicePrice}>{service.price}</div>
      </div>
    </div>
  );
}
