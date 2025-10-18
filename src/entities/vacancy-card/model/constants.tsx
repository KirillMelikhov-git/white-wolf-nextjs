import type { ICard } from '@/shared/ui/Card/types';
import { Veterinarian, Assistant, Administrator } from '@/shared/ui/Icons';

export const vacancyCards: ICard[] = [
  {
    id: 'vacancy-veterinarian',
    image: Veterinarian,
    title: 'Ветеринарный врач',
    description:
      'Ищем опытного ветеринарного врача для работы с мелкими домашними животными. Требуется высшее ветеринарное образование и опыт работы от 2 лет.',
    salary: 'Зарплата: от 70 000 рублей',
  },
  {
    id: 'vacancy-assistant',
    image: Assistant,
    title: 'Ассистент врача',
    description:
      'Приглашаем ассистента для помощи ветеринарному врачу. Обязанности: подготовка инструментов, уход за животными, ведение документации.',
    salary: 'Зарплата: от 50 000 рублей',
  },
  {
    id: 'vacancy-administrator',
    image: Administrator,
    title: 'Администратор',
    description:
      'Требуется администратор для работы с клиентами, записи на прием, ведения базы данных клиентов и организации работы клиники.',
    salary: 'Зарплата: от 30 000 рублей',
  },
];
