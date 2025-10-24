'use client';

import { useRef, useState } from 'react';

import { workersCards } from '@/entities/workers-card/model';
import { CardWithAnimation } from '@/shared/ui/Card';

import styles from './WorkersList.module.scss';

export function WorkersList() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const lastActiveRef = useRef<string | null>(null);

  const handleInView = (id: string) => {
    // Предотвращаем лишние обновления если карточка уже активна
    if (lastActiveRef.current === id) {
      return;
    }

    // Проверяем последовательность активации
    const newIndex = workersCards.findIndex((card) => card.id === id);
    const currentIndex = workersCards.findIndex(
      (card) => card.id === lastActiveRef.current
    );

    // Если есть активная карточка, проверяем что новая карточка является соседней
    if (lastActiveRef.current !== null && currentIndex !== -1) {
      const diff = Math.abs(newIndex - currentIndex);
      // Разрешаем активацию только соседних карточек (разница индексов = 1)
      if (diff > 1) {
        return; // Игнорируем попытку перескочить через карточку
      }
    }

    lastActiveRef.current = id;
    setActiveCardId(id);
  };

  const handleOutView = (id: string) => {
    // Сбрасываем только если это текущая активная карточка
    if (activeCardId === id && lastActiveRef.current === id) {
      lastActiveRef.current = null;
      setActiveCardId(null);
    }
  };

  return (
    <>
      <h2 className={styles.title}>Наши специалисты</h2>
      <div className={styles.cardList}>
        {workersCards.map((card) => (
          <CardWithAnimation
            key={card.id}
            card={card}
            isActive={activeCardId === card.id}
            onInView={handleInView}
            onOutView={handleOutView}
          />
        ))}
      </div>
    </>
  );
}
