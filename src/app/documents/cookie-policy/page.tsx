import type { Metadata } from 'next';
import Link from 'next/link';

import { createMetadata } from '@/shared/lib/seo';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import styles from './page.module.scss';

export const metadata: Metadata = createMetadata({
  title: 'Политика использования cookie',
  description:
    'Документ сайта, который объясняет, какие маленькие текстовые файлы (cookie) сохраняются на вашем устройстве, зачем они нужны и как ими управлять.',
  keywords: [
    'cookie',
    'политика cookie',
    'файлы cookie',
    'ветеринарная клиника',
    'белый волк',
  ],
  url: '/documents/cookie-policy',
});

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <article className={styles.content}>
          <Link href="/documents" className={styles.backLink}>
            ← К документам
          </Link>

          <h1 className={styles.title}>Политика использования cookie</h1>

          <p className={styles.lead}>
            Документ сайта, который объясняет, какие маленькие текстовые файлы
            (cookie) сохраняются на вашем устройстве, зачем они нужны и как ими
            управлять.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Что такое cookie</h2>
            <p>
              Cookie — это небольшие текстовые файлы, которые сайт может
              сохранять в браузере на вашем компьютере, телефоне или планшете.
              Они помогают сайту «запоминать» ваши настройки и работать
              стабильнее.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Какие cookie мы используем</h2>
            <ul className={styles.list}>
              <li>
                <strong>Необходимые</strong> — помогают сайту корректно
                открываться и сохранять ваш выбор в баннере cookie.
              </li>
              <li>
                <strong>Аналитические</strong> — Яндекс.Метрика. Они помогают
                понять, как посетители пользуются сайтом: какие страницы
                открывают и где возникают сложности. Эти данные нужны, чтобы
                улучшать сайт. Аналитика включается после вашего согласия в
                баннере cookie.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Зачем это нужно</h2>
            <p>
              Cookie позволяют сделать сайт удобнее и надёжнее, а также собирать
              обезличенную статистику посещений. Мы не используем cookie, чтобы
              скрыто собирать лишние данные сверх того, что нужно для работы и
              улучшения сайта.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Как управлять cookie</h2>
            <p>
              Вы можете принять использование cookie через баннер на сайте.
              Также cookie можно удалить или ограничить в настройках вашего
              браузера. Если отключить cookie полностью, отдельные функции сайта
              могут работать хуже.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Контакты</h2>
            <p>
              Если у вас есть вопросы по использованию cookie, напишите нам
              через форму обратной связи на сайте или свяжитесь с клиникой
              «Белый Волк» удобным для вас способом.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
