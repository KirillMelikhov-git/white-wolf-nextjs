import type { ICard } from '@/shared/ui/Card/types';
import { Veterinarian, Assistant, Administrator } from '@/shared/ui/Icons';

export const vacancyCards: ICard[] = [
  {
    id: 'vacancy-veterinarian',
    image: Veterinarian,
    title: 'Ветеринарный врач',
    description:
      'Ищем опытного ветеринарного врача для работы с мелкими домашними животными. Требуется высшее ветеринарное образование и опыт работы от 2 лет.',
  },
  {
    id: 'vacancy-assistant',
    image: Assistant,
    title: 'Ассистент ветеринарного врача',
    description:
      'Приглашаем ассистента для помощи ветеринарному врачу. Обязанности: подготовка инструментов, уход за животными, ведение документации.',
  },
  {
    id: 'vacancy-administrator',
    image: Administrator,
    title: 'Администратор',
    description:
      'Требуется администратор для работы с клиентами, записи на прием, ведения базы данных клиентов и организации работы клиники.',
  },
];
