'use client';

import { useState } from 'react';

import { workersCards } from '@/entities/workers-card/model';
import { CardWithAnimation } from '@/shared/ui/Card';

import styles from './WorkersList.module.scss';

export function WorkersList() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <>
      <h2 className={styles.title}>Наши специалисты</h2>
      <div className={styles.cardList}>
        {workersCards.map((card) => (
          <CardWithAnimation
            key={card.id}
            card={card}
            isActive={activeCardId === card.id}
            onInView={(id) => setActiveCardId(id)}
            onOutView={(id) => {
              if (activeCardId === id) {
                setTimeout(() => {
                  setActiveCardId(null);
                }, 100);
              }
            }}
          />
        ))}
      </div>
    </>
  );
}
