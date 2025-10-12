import styles from './Logo.module.scss';
import logoSvg from './logo.svg';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className, size = 'sm' }: LogoProps) {
  return (
    // prettier-ignore
    <img
      src={logoSvg}
      alt="Logo"
      className={`${styles.logo} ${styles[size]} ${className || ''}`}
    />
  );
}
