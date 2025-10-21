import { type Service } from '@/entities/service';

import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceInfo}>
        <h3 className={styles.serviceName}>{service.name}</h3>
        <div className={styles.servicePrice}>{service.price}</div>
      </div>
    </div>
  );
}
