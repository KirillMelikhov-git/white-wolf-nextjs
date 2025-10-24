'use client';

import { vacancyCards } from '@/entities/vacancy-card';
import { CardWithAnimation } from '@/shared/ui/Card';

import styles from './VacancyCardList.module.scss';

export function VacancyCardList() {
  return (
    <div className={styles.vacancyCardList}>
      {vacancyCards.map((card) => (
        <CardWithAnimation key={card.id} card={card} />
      ))}
    </div>
  );
}
