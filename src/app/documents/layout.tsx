import type { Metadata } from 'next';

import { createMetadata } from '@/shared/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Документы',
  description:
    'Официальные документы ветеринарной клиники Белый Волк: лицензии, сертификаты, договоры на оказание услуг, политика конфиденциальности.',
  keywords: [
    'документы ветклиники',
    'лицензия',
    'сертификаты',
    'договор',
    'политика конфиденциальности',
  ],
  url: '/documents',
});

export default function VacanciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
