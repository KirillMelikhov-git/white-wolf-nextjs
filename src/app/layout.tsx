import type { Metadata, Viewport } from 'next';

import { StructuredData } from '@/components/StructuredData';
import YandexMetrika from '@/components/YandexMetrika';
import {
  createLocalBusinessSchema,
  createMetadata,
  createOrganizationSchema,
} from '@/shared/lib/seo';

import './globals.scss';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#667eea',
};

export const metadata: Metadata = createMetadata({
  title: 'Белый Волк - Ветеринарная клиника',
  description:
    'Ветеринарная клиника Белый Волк - профессиональная помощь вашим питомцам. Опытные врачи, современное оборудование, круглосуточная поддержка.',
  keywords: [
    'ветеринарная клиника',
    'ветеринар',
    'лечение животных',
    'ветклиника',
    'белый волк',
    'ветеринарные услуги',
    'помощь животным',
  ],
  url: '/',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = createOrganizationSchema();
  const localBusinessSchema = createLocalBusinessSchema();

  return (
    <html lang="ru">
      <head>
        <StructuredData data={[organizationSchema, localBusinessSchema]} />
      </head>
      <body>
        {children}
        <YandexMetrika />
      </body>
    </html>
  );
}
