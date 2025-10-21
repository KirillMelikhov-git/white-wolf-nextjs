'use client';

import { useState, useMemo } from 'react';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { ServiceSearch } from '@/features/service-search';
import { ServiceCard } from '@/entities/service';
import { SERVICES_DATA, type Service } from '@/entities/service';

import styles from './page.module.scss';

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
    setSearchQuery(''); // Очищаем поиск при выборе категории
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null); // Сбрасываем выбранную категорию при поиске
  };

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
                Результаты поиска по запросу "{searchQuery}"
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
                  <div key={category.id} className={styles.categoryCard}>
                    <button
                      className={styles.categoryButton}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      <h3 className={styles.categoryName}>{category.name}</h3>
                      <p className={styles.servicesCount}>
                        {category.services.length} услуг
                      </p>
                      <div className={styles.expandIcon}>
                        {selectedCategory === category.id ? '−' : '+'}
                      </div>
                    </button>

                    {selectedCategory === category.id && (
                      <div className={styles.servicesList}>
                        <div className={styles.servicesGrid}>
                          {category.services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
