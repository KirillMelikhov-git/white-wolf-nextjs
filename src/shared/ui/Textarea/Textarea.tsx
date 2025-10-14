import { forwardRef, TextareaHTMLAttributes } from 'react';

import styles from './Textarea.module.scss';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, fullWidth = true, className = '', id, ...props }, ref) => {
    const textareaId =
      id || `textarea-${label.toLowerCase().replace(/\s+/g, '-')}`;

    return (
      <div
        className={`${styles.textareaWrapper} ${fullWidth ? styles.fullWidth : ''}`}
      >
        <label htmlFor={textareaId} className={styles.label}>
          {label}
          {props.required && <span className={styles.required}>*</span>}
        </label>
        <textarea
          id={textareaId}
          ref={ref}
          className={`${styles.textarea} ${error ? styles.error : ''} ${className}`}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
