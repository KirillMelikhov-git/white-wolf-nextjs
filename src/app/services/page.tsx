'use client';

import { useState, useMemo, useRef, useEffect } from 'react';

import { ServiceCard } from '@/entities/service';
import { SERVICES_DATA, type ServiceCategory } from '@/entities/service';
import { ServiceSearch } from '@/features/service-search';
import { ServicesModal } from '@/shared/ui/ServicesModal';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

import styles from './page.module.scss';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategory | null>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLHeadingElement | null }>({});

  // Фильтрация услуг по поисковому запросу
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) {
      return SERVICES_DATA;
    }

    const query = searchQuery.toLowerCase();
    return SERVICES_DATA.map((category) => ({
      ...category,
      services: category.services.filter(
        (service) =>
          service.name.toLowerCase().includes(query) ||
          service.category.toLowerCase().includes(query)
      ),
    })).filter((category) => category.services.length > 0);
  }, [searchQuery]);

  // Получение всех услуг для поиска
  const allServices = useMemo(() => {
    return SERVICES_DATA.flatMap((category) => category.services);
  }, []);

  // Фильтрация всех услуг по поисковому запросу
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return [];
    }

    const query = searchQuery.toLowerCase();
    return allServices.filter(
      (service) =>
        service.name.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query)
    );
  }, [searchQuery, allServices]);

  const handleCategoryClick = (category: ServiceCategory) => {
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    // Проверяем каждое название категории на переполнение
    Object.values(categoryRefs.current).forEach((element) => {
      if (element) {
        const span = element.querySelector('span');
        if (span) {
          // Проверяем, превышает ли ширина текста ширину контейнера
          const isOverflowing = span.scrollWidth > element.clientWidth;
          if (isOverflowing) {
            element.classList.add(styles.scrollable);
            // Дублируем текст для бесшовной анимации
            const text = span.textContent || '';
            span.innerHTML = `${text}&nbsp;&nbsp;&nbsp;${text}`;
          } else {
            element.classList.remove(styles.scrollable);
          }
        }
      }
    });
  }, [filteredServices]);

  return (
    <>
      <Header />
      <main className={styles.servicesPage}>
        <div className={styles.container}>
          <h1 className={styles.title}>Наши услуги</h1>

          <ServiceSearch onSearch={handleSearch} />

          {searchQuery ? (
            // Показываем результаты поиска
            <div className={styles.searchResults}>
              <h2 className={styles.resultsTitle}>
                Результаты поиска по запросу &quot;{searchQuery}&quot;
              </h2>
              {searchResults.length > 0 ? (
                <div className={styles.servicesGrid}>
                  {searchResults.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              ) : (
                <p className={styles.noResults}>
                  По вашему запросу ничего не найдено
                </p>
              )}
            </div>
          ) : (
            // Показываем категории услуг
            <div className={styles.categories}>
              <h2 className={styles.categoriesTitle}>Категории услуг</h2>
              <div className={styles.categoriesGrid}>
                {filteredServices.map((category) => (
                  <button
                    key={category.id}
                    className={styles.categoryCard}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <div className={styles.categoryIcon}>
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        {/* Медицинский крест */}
                        <path d="M9 3H15V9H21V15H15V21H9V15H3V9H9V3Z" />
                      </svg>
                    </div>
                    <h3
                      className={styles.categoryName}
                      ref={(el) => {
                        categoryRefs.current[category.id] = el;
                      }}
                    >
                      <span>{category.name}</span>
                    </h3>
                    <p className={styles.servicesCount}>
                      {category.services.length}{' '}
                      {category.services.length === 1
                        ? 'услуга'
                        : category.services.length < 5
                          ? 'услуги'
                          : 'услуг'}
                    </p>
                    <div className={styles.viewButton}>
                      <span>Смотреть услуги</span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      {/* Модальное окно с услугами категории */}
      {selectedCategory && (
        <ServicesModal
          isOpen={!!selectedCategory}
          onClose={handleCloseModal}
          categoryName={selectedCategory.name}
          services={selectedCategory.services}
        />
      )}
    </>
  );
}
