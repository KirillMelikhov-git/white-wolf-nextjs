import { vacancyCards } from '@/entities/vacancy-card';
import { Card } from '@/shared/ui/Card';

import styles from './VacancyCardList.module.scss';

export function VacancyCardList() {
  return (
    <div className={styles.vacancyCardList}>
      {vacancyCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
