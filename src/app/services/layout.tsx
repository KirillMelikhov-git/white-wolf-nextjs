import type { Metadata } from 'next';

import { createMetadata } from '@/shared/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Услуги',
  description:
    'Полный спектр ветеринарных услуг клиники Белый Волк: диагностика, лечение, хирургия, вакцинация, груминг и другие услуги для ваших питомцев.',
  keywords: [
    'ветеринарные услуги',
    'лечение животных',
    'вакцинация',
    'хирургия',
    'диагностика',
    'груминг',
  ],
  url: '/services',
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
