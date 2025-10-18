import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Подготовка к визиту | White Wolf Veterinary Clinic',
  description:
    'Информация о том, как подготовиться к визиту в ветеринарную клинику White Wolf',
};

interface BeforeVisitLayoutProps {
  children: ReactNode;
}

export default function BeforeVisitLayout({
  children,
}: BeforeVisitLayoutProps) {
  return <>{children}</>;
}
