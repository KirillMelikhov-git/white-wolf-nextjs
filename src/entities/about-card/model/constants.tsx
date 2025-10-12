import type { ICard } from '@/shared/ui/Card/types';
import { Clinic, Individual, Loyalty, Quality } from '@/shared/ui/Icons';

export const aboutCards: ICard[] = [
  {
    id: 'about-card-1',
    image: Clinic,
    title: 'Комплексное лечение',
    description:
      'Наша клиника оказывает широкий спектр ветеринарных услуг, чтобы добиться выздоровления вашего любимого питомца.',
  },
  {
    id: 'about-card-2',
    image: Individual,
    title: 'Индивидуальный подход',
    description:
      'Мы учитываем индивидуальные особенности каждого питомца и предлагаем наиболее эффективные решения.',
  },
  {
    id: 'about-card-3',
    image: Loyalty,
    title: 'Программа лояльности',
    description:
      'Мы предлагаем накопительную систему скидок, бонусов и других привилегий для наших постоянных клиентов.',
  },
  {
    id: 'about-card-4',
    image: Quality,
    title: 'Качественные услуги',
    description:
      'Качество наших услуг и оборудования - наш приоритет. Мы используем только современное и эффективное оборудование.',
  },
];
