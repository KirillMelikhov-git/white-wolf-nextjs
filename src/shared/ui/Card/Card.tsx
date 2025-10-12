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
        <h2 className={styles.name}>{card.title}</h2>
        {card.profession ? <p>{card.profession}</p> : null}
        {card.university ? (
          <div className={styles.universityContainer}>
            <span>{card.university}</span>
            <p>{card.description}</p>
          </div>
        ) : (
          <p>{card.description}</p>
        )}
      </div>
    </div>
  );
}
