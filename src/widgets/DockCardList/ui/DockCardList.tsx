'use client';

import { dockCards } from '@/entities/dock-card';
import { CardWithAnimation } from '@/shared/ui/Card';

import styles from './DockCardList.module.scss';

export function DockCardList() {
  return (
    <div className={styles.vacancyCardList}>
      {dockCards.map((card) => (
        <CardWithAnimation key={card.id} card={card} />
      ))}
    </div>
  );
}
