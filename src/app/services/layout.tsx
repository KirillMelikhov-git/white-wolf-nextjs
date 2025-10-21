import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Услуги | Белый волк',
  description: 'Полный список ветеринарных услуг клиники Белый волк',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
