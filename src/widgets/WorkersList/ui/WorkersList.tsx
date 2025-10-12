import { Card } from '@/shared/ui/Card';

import styles from './WorkersList.module.scss';

import { workersCards } from '@/entities/workers-card/model';

export function WorkersList() {
  return (
    <div className={styles.cardList}>
      {workersCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
