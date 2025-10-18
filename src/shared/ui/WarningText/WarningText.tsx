'use client';

import { ReactNode } from 'react';

import styles from './WarningText.module.scss';

export interface WarningTextProps {
  children: ReactNode;
  className?: string;
}

export const WarningText = ({ children, className = '' }: WarningTextProps) => {
  return (
    <span className={`${styles.warningText} ${className}`}>{children}</span>
  );
};
