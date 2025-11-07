import type { Metadata } from 'next';
import './globals.scss';

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
      <body>{children}</body>
    </html>
  );
}
