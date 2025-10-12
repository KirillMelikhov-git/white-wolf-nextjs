import type { AboutSlide } from './types';

export const aboutSliders: AboutSlide[] = [
  {
    id: 'slide-1',
    title: 'Современное оборудование',
    description:
      'Мы используем только самое современное оборудование для диагностики и лечения ваших питомцев.',
    image: '/images/equipment.jpg',
  },
  {
    id: 'slide-2',
    title: 'Опытные ветеринары',
    description:
      'Наши специалисты имеют многолетний опыт работы с различными видами животных.',
    image: '/images/veterinarians.jpg',
  },
  {
    id: 'slide-3',
    title: 'Круглосуточная помощь',
    description: 'Мы работаем 24/7, чтобы быть рядом с вами в любое время.',
    image: '/images/emergency.jpg',
    link: {
      to: '/emergency',
      text: 'Узнать больше',
    },
  },
];
