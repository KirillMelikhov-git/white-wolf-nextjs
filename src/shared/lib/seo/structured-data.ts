import { WithContext, Organization, LocalBusiness } from 'schema-dts';

export function createOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ветеринарная клиника Белый Волк',
    url: 'https://vetwolf.ru',
    logo: 'https://vetwolf.ru/images/icon.svg',
    description:
      'Ветеринарная клиника Белый Волк - профессиональная помощь вашим питомцам',
    sameAs: [
      // Добавьте ссылки на социальные сети, если есть
      // 'https://vk.com/vetwolf',
      // 'https://t.me/vetwolf',
    ],
  };
}

export function createLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ветеринарная клиника Белый Волк',
    description:
      'Ветеринарная клиника Белый Волк - профессиональная помощь вашим питомцам',
    url: 'https://vetwolf.ru',
    telephone: '+7-XXX-XXX-XX-XX', // Замените на реальный телефон
    email: 'info@vetwolf.ru', // Замените на реальный email
    image: 'https://vetwolf.ru/images/og-image.jpg',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '', // Добавьте адрес
      addressLocality: '', // Город
      addressRegion: '', // Регион
      postalCode: '', // Индекс
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 0, // Добавьте координаты
      longitude: 0,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
  };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://vetwolf.ru${item.url}`,
    })),
  };
}
