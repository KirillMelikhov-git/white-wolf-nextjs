import type { Metadata } from 'next';

import { createMetadata } from '@/shared/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Вакансии',
  description:
    'Открытые вакансии в ветеринарной клинике Белый Волк. Присоединяйтесь к нашей команде профессионалов: ветеринары, ассистенты, администраторы.',
  keywords: [
    'вакансии ветклиники',
    'работа ветеринаром',
    'вакансии белый волк',
    'работа с животными',
    'карьера ветеринара',
  ],
  url: '/vacancies',
});

export default function VacanciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
