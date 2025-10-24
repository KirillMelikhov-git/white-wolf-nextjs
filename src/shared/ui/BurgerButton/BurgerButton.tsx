import styles from './BurgerButton.module.scss';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
  return (
    <button
      className={`${styles.burgerButton} ${isOpen ? styles.open : ''}`}
      onClick={onClick}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
      aria-expanded={isOpen}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  );
}
