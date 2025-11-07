import type { ICard } from '@/shared/ui/Card/types';

import worker1 from '../assets/worker-1.jpg';
import worker3 from '../assets/worker-3.png';
import worker4 from '../assets/worker-4.jpg';
import worker6 from '../assets/worker-6.jpg';
import worker8 from '../assets/worker-8.png';

export const workersCards: ICard[] = [
  {
    id: 'workers-card-1',
    image: worker1.src,
    title: 'Мелихова Анастасия Сергеевна',
    profession: 'Терапевт, хирург, специалист УЗИ',
    university: 'Ивановская ГСХА',
  },
  {
    id: 'workers-card-2',
    image: '/images/background.png',
    title: 'Лисковская Елена Сергеевна',
    profession: 'Хирург-онколог, химиотерапевт, терапевт',
    university: 'СПБГА ветеринарной медицины',
  },
  {
    id: 'workers-card-3',
    image: worker3.src,
    title: 'Замыцкая Оксана Геннадьевна',
    profession: 'Иммунолог, цитолог, дерматолог',
    university: 'ОГАУ',
  },
  {
    id: 'workers-card-4',
    image: worker4.src,
    title: 'Шувалова Анастасия Романовна',
    profession: 'Терапевт, хирург',
    university: 'Ивановская ГСХА',
  },
  {
    id: 'workers-card-5',
    image: '/images/background.png',
    title: 'Агеева Рита Фяридовна',
    profession: 'Ассистент ветеринарного терапевта, хирурга',
  },
  {
    id: 'workers-card-6',
    image: worker6.src,
    title: 'Иващенко Мария Станиславовна',
    profession: 'Ассистент ветеринарного терапевта, хирурга',
  },
  {
    id: 'workers-card-7',
    image: worker8.src,
    title: 'Стать частью команды!',
    description: 'Ознакомьтесь со списокм вакансий.',
    link: '/vacancies',
  },
];
