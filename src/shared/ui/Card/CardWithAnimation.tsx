'use client';

import { useInViewAnimation } from '@/shared/hooks';
import { type ICard } from '@/shared/ui/Card/types';

import { Card } from './Card';

interface CardWithAnimationProps {
  card: ICard;
}

export function CardWithAnimation({ card }: CardWithAnimationProps) {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>({
    threshold: 0.3,
    triggerOnce: false,
  });

  return <Card card={card} isInView={isInView} cardRef={ref} />;
}
