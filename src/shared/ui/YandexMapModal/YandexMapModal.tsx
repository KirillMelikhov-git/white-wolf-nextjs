'use client';

import { useEffect, useRef, useState } from 'react';
import { Modal } from '../Modal';
import styles from './YandexMapModal.module.scss';

export interface YandexMapModalProps {
  isOpen: boolean;
  onClose: () => void;
  address?: string;
  coordinates?: [number, number]; // [долгота, широта]
}

declare global {
  interface Window {
    ymaps3: any;
    ymaps: any;
  }
}

export const YandexMapModal = ({
  isOpen,
  onClose,
  address = 'пгт. Рощино, ул. Советская, 4',
  coordinates = [60.258207, 29.598024], // Координаты клиники [широта, долгота]
}: YandexMapModalProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapError, setMapError] = useState(false);

  const handleOpenInYandexMaps = () => {
    const url = `https://yandex.ru/maps/?pt=${coordinates[1]},${coordinates[0]}&z=15&l=map`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    if (isOpen) {
      setMapError(false);
      console.log('Открываем карту...');
      console.log('API Key:', process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY);
      console.log('Coordinates:', coordinates);

      // Загружаем Яндекс карты API 2.1 с API ключом
      const script = document.createElement('script');
      const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY;

      if (!apiKey) {
        console.error('API ключ не найден!');
        setMapError(true);
        return;
      }

      // Используем старую версию API (2.1) для лучшей совместимости
      script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
      script.async = true;

      script.onload = () => {
        console.log('Скрипт Яндекс карт загружен');
        if (window.ymaps && mapRef.current) {
          console.log('Инициализируем карту...');
          window.ymaps.ready(() => {
            console.log('API готов, создаем карту');
            try {
              // Создаем карту (API 2.1)
              mapInstanceRef.current = new window.ymaps.Map(mapRef.current, {
                center: coordinates,
                zoom: 15,
              });

              // Добавляем маркер
              const marker = new window.ymaps.Placemark(coordinates, {
                balloonContent: address,
                hintContent: 'Ветеринарная клиника "Белый волк"',
              });

              mapInstanceRef.current.geoObjects.add(marker);
              console.log('Карта создана успешно');
            } catch (error) {
              console.error('Ошибка при создании карты:', error);
              setMapError(true);
            }
          });
        } else {
          console.error(
            'window.ymaps не найден или mapRef.current отсутствует'
          );
          setMapError(true);
        }
      };

      script.onerror = () => {
        console.error('Ошибка загрузки скрипта Яндекс карт');
        setMapError(true);
      };

      document.head.appendChild(script);

      return () => {
        console.log('Закрываем карту...');
        setMapError(false);
        // Очищаем карту при закрытии
        if (mapInstanceRef.current) {
          mapInstanceRef.current.destroy();
          mapInstanceRef.current = null;
        }
        // Удаляем скрипт
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, [isOpen, coordinates, address]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.mapModal}>
      <div className={styles.mapContainer}>
        <div className={styles.mapHeader}>
          <h3 className={styles.mapTitle}>Наше местоположение</h3>
          <button
            className={styles.closeButton}
            onClick={onClose}
            type="button"
            aria-label="Закрыть карту"
          >
            ✕
          </button>
        </div>

        <div className={styles.mapContent}>
          <p className={styles.address}>{address}</p>
          {mapError ? (
            <div className={styles.errorContainer}>
              <p className={styles.errorMessage}>Не удалось загрузить карту</p>
              <p className={styles.errorHint}>
                Возможно, проблема с API ключом или интернет-соединением
              </p>
              <button
                className={styles.fallbackButton}
                onClick={handleOpenInYandexMaps}
                type="button"
              >
                Открыть в Яндекс.Картах
              </button>
            </div>
          ) : (
            <div ref={mapRef} className={styles.map} />
          )}
        </div>
      </div>
    </Modal>
  );
};
