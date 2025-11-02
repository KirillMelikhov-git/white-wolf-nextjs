import Link from 'next/link';

import { type ICard } from '@/shared/ui/Card/types';

import styles from './Card.module.scss';

interface AboutCardProps {
  card: ICard;
  isInView?: boolean;
  cardRef?: React.RefObject<HTMLDivElement | null>;
}

export function Card({ card, isInView = false, cardRef }: AboutCardProps) {
  const Image = card.image;
  const isVacancyCard = card.link === '/vacancies';

  const cardContent = (
    <>
      <div className={styles.imageContainer}>
        {isVacancyCard ? (
          <div className={styles.plusContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.plusIcon}
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        ) : typeof card.image === 'string' ? (
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
        {isVacancyCard && (
          <div className={styles.linkHint}>Перейти к вакансиям →</div>
        )}
      </div>
    </>
  );

  const cardClasses = `${styles.card} ${card.salary ? styles.cardWithSalary : ''} ${isVacancyCard ? styles.vacancyCard : ''} ${isInView ? 'inView' : ''}`;

  if (card.link) {
    return (
      <Link
        href={card.link}
        ref={cardRef as React.Ref<HTMLAnchorElement>}
        className={`${cardClasses} ${styles.cardLink}`}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div ref={cardRef} className={cardClasses}>
      {cardContent}
    </div>
  );
}
