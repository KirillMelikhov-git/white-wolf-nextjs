import Link from 'next/link';

import { Instagram, VK, Telegram } from '@/shared/ui/Icons';

import styles from './SocialLinks.module.scss';

export function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <Link
        href="https://instagram.com/your_clinic" // TODO: Вставьте ссылку на Instagram
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram />
      </Link>

      <Link
        href="https://vk.com/your_clinic" // TODO: Вставьте ссылку на VK
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="VK"
      >
        <VK />
      </Link>

      <Link
        href="https://t.me/your_clinic" // TODO: Вставьте ссылку на Telegram
        className={styles.socialLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
      >
        <Telegram />
      </Link>
    </div>
  );
}
