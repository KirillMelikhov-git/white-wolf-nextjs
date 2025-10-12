import { cards } from '@/entities/about-card/model';
import { Card } from '@/shared/ui/Card';

import styles from './CardList.module.scss';

export function CardList() {
  return (
    <div className={styles.cardList}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
