import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'White Wolf Veterinary Clinic',
  description: 'Professional veterinary care for your pets',
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
