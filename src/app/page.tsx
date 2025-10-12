import { Header } from '@/widgets/Header';
import { Card } from '@/shared/ui/Card';
import { cards } from '@/entities/about-card/model';

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ marginTop: '70px', padding: '20px' }}>
        <h1>White Wolf Veterinary Clinic</h1>
        <p>Добро пожаловать в нашу ветеринарную клинику!</p>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </main>
    </>
  );
}
