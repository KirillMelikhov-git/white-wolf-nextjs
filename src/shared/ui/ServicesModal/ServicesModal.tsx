'use client';

import { Modal } from '../Modal';
import { ServiceCard, type Service } from '@/entities/service';

import styles from './ServicesModal.module.scss';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoryName: string;
  services: Service[];
}

export const ServicesModal = ({
  isOpen,
  onClose,
  categoryName,
  services,
}: ServicesModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.servicesModal}>
      <div className={styles.header}>
        <h2 className={styles.title}>{categoryName}</h2>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрыть"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <div className={styles.servicesCount}>
        {services.length}{' '}
        {services.length === 1
          ? 'услуга'
          : services.length < 5
            ? 'услуги'
            : 'услуг'}
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Modal>
  );
};
