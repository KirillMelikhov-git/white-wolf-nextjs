import { useEffect, useRef, useState } from 'react';

interface UseInViewAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Хук для анимации элементов при попадании в область видимости
 * Особенно полезен для мобильных устройств, где hover не работает
 */
export function useInViewAnimation<T extends HTMLElement>(
  options: UseInViewAnimationOptions = {}
) {
  const { threshold = 0.5, rootMargin = '0px', triggerOnce = false } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const wasInViewRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (ratio >= threshold && !wasInViewRef.current) {
          // Активация: элемент достиг нужного порога видимости
          setIsInView(true);
          wasInViewRef.current = true;
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (ratio === 0 && wasInViewRef.current && !triggerOnce) {
          // Деактивация: элемент полностью вышел из экрана
          setIsInView(false);
          wasInViewRef.current = false;
        }
      },
      {
        threshold: [0, threshold], // Следим за двумя порогами: 0 (полностью вне) и threshold (активация)
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}
