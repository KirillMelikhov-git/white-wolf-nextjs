// Временные SVG компоненты (позже заменим на настоящие)
const ClinicIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
  </svg>
);

const IndividualIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

const LoyaltyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const QualityIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

import type { Card } from './types';

export const cards: Card[] = [
  {
    id: 'card-1',
    image: ClinicIcon,
    title: 'Комплексное лечение',
    description:
      'Наша клиника оказывает широкий спектр ветеринарных услуг, чтобы добиться выздоровления вашего любимого питомца.',
  },
  {
    id: 'card-2',
    image: IndividualIcon,
    title: 'Индивидуальный подход',
    description:
      'Мы учитываем индивидуальные особенности каждого питомца и предлагаем наиболее эффективные решения.',
  },
  {
    id: 'card-3',
    image: LoyaltyIcon,
    title: 'Программа лояльности',
    description:
      'Мы предлагаем накопительную систему скидок, бонусов и других привилегий для наших постоянных клиентов.',
  },
  {
    id: 'card-4',
    image: QualityIcon,
    title: 'Качественные услуги',
    description:
      'Качество наших услуг и оборудования - наш приоритет. Мы используем только современное и эффективное оборудование.',
  },
];
