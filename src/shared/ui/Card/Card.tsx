import { type ICard } from '@/shared/ui/Card/types';

import styles from './Card.module.scss';

interface AboutCardProps {
  card: ICard;
}

export function Card({ card }: AboutCardProps) {
  const Image = card.image;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {typeof card.image === 'string' ? (
          <img src={card.image} alt={card.title} loading="lazy" />
        ) : (
          <Image />
        )}
      </div>
      <div className={styles.textContainer}>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </div>
    </div>
  );
}
