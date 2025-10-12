import styles from './Logo.module.scss';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, size = 'sm' }: LogoProps) {
  return (
    <img
      src="/images/logo.svg"
      alt="Белый волк - ветеринарная клиника"
      className={`${styles.logo} ${styles[size]} ${className || ''}`}
    />
  );
}
