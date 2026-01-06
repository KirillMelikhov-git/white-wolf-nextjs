import { Metadata } from 'next';

const siteConfig = {
  name: 'Белый Волк',
  description:
    'Ветеринарная клиника Белый Волк - профессиональная помощь вашим питомцам',
  url: 'https://vetwolf.ru',
  ogImage: 'https://vetwolf.ru/images/og-image.jpg',
};

export function createMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords,
}: {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string[];
}): Metadata {
  const metaTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    authors: [{ name: siteConfig.name }],
    openGraph: {
      type,
      locale: 'ru_RU',
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
    alternates: {
      canonical: metaUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export { siteConfig };
