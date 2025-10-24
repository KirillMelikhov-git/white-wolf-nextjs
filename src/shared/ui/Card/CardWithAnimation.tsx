'use client';

import { useEffect } from 'react';

import { useInViewAnimation } from '@/shared/hooks';
import { type ICard } from '@/shared/ui/Card/types';

import { Card } from './Card';

interface CardWithAnimationProps {
  card: ICard;
  isActive?: boolean;
  onInView?: (id: string) => void;
  onOutView?: (id: string) => void;
}

export function CardWithAnimation({
  card,
  isActive = false,
  onInView,
  onOutView,
}: CardWithAnimationProps) {
  const { ref, isInView } = useInViewAnimation<HTMLDivElement>({
    threshold: 0.4,
    rootMargin: '-10% 0px -45% 0px',
    triggerOnce: false,
  });

  useEffect(() => {
    if (isInView && onInView) {
      onInView(card.id);
    } else if (!isInView && onOutView) {
      onOutView(card.id);
    }
  }, [isInView, card.id, onInView, onOutView]);

  // Если есть управление извне (isActive), используем его, иначе используем isInView
  const shouldHighlight = onInView !== undefined ? isActive : isInView;

  return <Card card={card} isInView={shouldHighlight} cardRef={ref} />;
}
