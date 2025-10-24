'use client';

import { aboutCards } from '@/entities/about-card/model';
import { CardWithAnimation } from '@/shared/ui/Card';

import styles from './CardList.module.scss';

export function CardList() {
  return (
    <div className={styles.cardList}>
      {aboutCards.map((card) => (
        <CardWithAnimation key={card.id} card={card} />
      ))}
    </div>
  );
}
