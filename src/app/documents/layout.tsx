import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Документы',
  description: 'Наши документы',
};

export default function VacanciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
