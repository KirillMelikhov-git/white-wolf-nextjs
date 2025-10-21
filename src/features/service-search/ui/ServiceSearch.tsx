'use client';

import { useState } from 'react';

import { Input } from '@/shared/ui/Input';

import styles from './ServiceSearch.module.scss';

interface ServiceSearchProps {
  onSearch: (query: string) => void;
}

export function ServiceSearch({ onSearch }: ServiceSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className={styles.searchContainer}>
      <Input
        label="Поиск услуг"
        placeholder="Введите название услуги..."
        value={searchQuery}
        onChange={handleSearchChange}
        className={styles.searchInput}
      />
    </div>
  );
}
