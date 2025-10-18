import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Вакансии - White Wolf Veterinary Clinic',
  description:
    'Присоединяйтесь к нашей команде профессионалов ветеринарной клиники',
};

export default function VacanciesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
