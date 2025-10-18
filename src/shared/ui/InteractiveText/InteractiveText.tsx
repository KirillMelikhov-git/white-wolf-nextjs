'use client';

import { ReactNode } from 'react';

import styles from './InteractiveText.module.scss';

export interface InteractiveTextProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

export const InteractiveText = ({
  children,
  onClick,
  className = '',
}: InteractiveTextProps) => {
  return (
    <span
      className={`${styles.interactiveText} ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </span>
  );
};
