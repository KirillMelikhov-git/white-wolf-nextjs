import type { ICard } from '@/shared/ui/Card/types';
import { Loyalty } from '@/shared/ui/Icons';

export const dockCards: ICard[] = [
  {
    id: 'agreement',
    image: Loyalty,
    title: 'Договор на оказание платных услуг',
    link: 'https://docs.google.com/document/d/18Q5MHFUCDW_5eItbNn416HRhzCzw5LTT/edit',
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
    link: 'https://docs.google.com/document/d/1BNy6QB7QnfI7PUtCXjX3i-SOU_MdAu2d/edit?usp=sharing&ouid=101541072731352233679&rtpof=true&sd=true',
  },
];
