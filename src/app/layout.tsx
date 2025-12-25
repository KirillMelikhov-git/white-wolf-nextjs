import type { Metadata } from 'next';

import './globals.scss';
import YandexMetrika from '@/components/YandexMetrika';

export const metadata: Metadata = {
  title: 'Белый Волк',
  description: 'Ветеринарная клиника Белый Волк',
  icons: {
    icon: '/images/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
        <YandexMetrika />
      </body>
    </html>
  );
}
