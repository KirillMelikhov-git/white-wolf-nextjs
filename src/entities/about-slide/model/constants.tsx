import slide2 from '../assets/slide-2.jpg';
import slide3 from '../assets/slide-3.jpg';
import slide4 from '../assets/slide-4.jpg';
import slide6 from '../assets/slide-6.jpg';

import type { AboutSlide } from './types';

export const aboutSliders: AboutSlide[] = [
  {
    id: 'about',
    title: 'О нас',
    description:
      'Наша ветеринарная клиника оказывает широкий спектр услуг по лечению домашних животных.',
    image: '/images/background.png',
  },
  {
    id: 'about-2',
    title: 'Мы растём ради ваших питомцев',
    description:
      'Новая операционная - ещё больше возможностей для заботы о ваших питомцах!',
    image: slide2.src,
  },
  {
    id: 'about-3',
    title: 'Бережно относимся к каждому посетителю',
    description: 'У нас есть лифт прямо в операционную, чтобы не тревожить пациентов.',
    image: slide3.src,
  },
  {
    id: 'about-4',
    title: 'Современное оборудование',
    description: 'Точные диагнозы благодаря современному оборудованию',
    image: slide4.src,
  },
  {
    id: 'about-5',
    title: 'Уют и комфорт',
    description:
      'Мы сделали клинику местом, где питомцы чувствуют себя спокойно',
    image: '/images/background.png',
  },
  {
    id: 'about-6',
    title: 'Магазин товаров для питомцев',
    description:
      'У нас есть магазин товаров для питомцев, где вы можете купить различные товары для вашего питомца.',
    image: slide6.src,
  },
  {
    id: 'about-7',
    title: 'Стань частью команды!',
    description: 'Хочешь вместе с нами помогать зверушкам? ',
    link: {
      text: 'Наши вакансии!',
      to: 'vacancies',
    },
    image: '/images/background.png',
  },
];
