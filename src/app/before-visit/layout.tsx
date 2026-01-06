import { Metadata } from 'next';
import { ReactNode } from 'react';

import { createMetadata } from '@/shared/lib/seo';

export const metadata: Metadata = createMetadata({
  title: 'Подготовка к визиту',
  description:
    'Полезная информация о том, как подготовиться к визиту в ветеринарную клинику Белый Волк: что взять с собой, как подготовить питомца, список необходимых документов.',
  keywords: [
    'подготовка к визиту',
    'визит к ветеринару',
    'документы для ветклиники',
    'первый визит',
  ],
  url: '/before-visit',
});

interface BeforeVisitLayoutProps {
  children: ReactNode;
}

export default function BeforeVisitLayout({
  children,
}: BeforeVisitLayoutProps) {
  return <>{children}</>;
}
