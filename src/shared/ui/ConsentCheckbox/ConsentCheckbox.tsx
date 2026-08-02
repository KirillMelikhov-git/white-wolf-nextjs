'use client';

import { forwardRef, InputHTMLAttributes } from 'react';

import styles from './ConsentCheckbox.module.scss';

export const PERSONAL_DATA_CONSENT_URL =
  '/documents/personal-data-consent.pdf';

export interface ConsentCheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: string;
}

export const ConsentCheckbox = forwardRef<
  HTMLInputElement,
  ConsentCheckboxProps
>(({ error, id = 'personal-data-consent', className = '', ...props }, ref) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <div className={styles.row}>
        <input
          id={id}
          ref={ref}
          type="checkbox"
          className={`${styles.checkbox} ${error ? styles.checkboxError : ''}`}
          {...props}
        />
        <p className={styles.text}>
          <label htmlFor={id}>Даю согласие на обработку </label>
          <a
            href={PERSONAL_DATA_CONSENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            персональных данных
          </a>
        </p>
      </div>
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
});

ConsentCheckbox.displayName = 'ConsentCheckbox';
