import Link from 'next/link';

import { type ICard } from '@/shared/ui/Card/types';

import styles from './Card.module.scss';

interface AboutCardProps {
  card: ICard;
}

export function Card({ card }: AboutCardProps) {
  const Image = card.image;

  const cardContent = (
    <>
      <div className={styles.imageContainer}>
        {typeof card.image === 'string' ? (
          <img src={card.image} alt={card.title} loading="lazy" />
        ) : (
          <Image />
        )}
      </div>
      <div
        className={`${styles.textContainer} ${card.salary ? styles.textContainerWithSalary : ''}`}
      >
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
        {card.salary ? <p className={styles.salary}>{card.salary}</p> : null}
      </div>
    </>
  );

  if (card.link) {
    return (
      <Link
        href={card.link}
        className={`${styles.card} ${card.salary ? styles.cardWithSalary : ''} ${styles.cardLink}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      className={`${styles.card} ${card.salary ? styles.cardWithSalary : ''}`}
    >
      {cardContent}
    </div>
  );
}
