import type { ICard } from '@/shared/ui/Card/types';
import { Loyalty } from '@/shared/ui/Icons';

export const dockCards: ICard[] = [
  {
    id: 'agreement',
    image: Loyalty,
    title: 'Договор на оказание платных услуг',
    link: '/',
  },
  {
    id: 'personal-data',
    image: Loyalty,
    title: 'Согласие на обработку персональных данных',
    link: '/',
  },
  {
    id: 'rules',
    image: Loyalty,
    title: 'Правила внутреннего распорядка',
    link: '/',
  },
];
