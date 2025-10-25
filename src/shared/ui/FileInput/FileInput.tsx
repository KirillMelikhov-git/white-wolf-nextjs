'use client';

import { forwardRef, useState, ChangeEvent } from 'react';

import styles from './FileInput.module.scss';

interface FileInputProps {
  label?: string;
  error?: string;
  accept?: string;
  maxSizeMB?: number;
  onChange?: (file: File | null) => void;
  required?: boolean;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      label,
      error,
      accept = '.pdf,.doc,.docx',
      maxSizeMB = 5,
      onChange,
      required = false,
    },
    ref
  ) => {
    const [fileName, setFileName] = useState<string>('');
    const [fileError, setFileError] = useState<string>('');

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      setFileError('');

      if (!file) {
        setFileName('');
        onChange?.(null);
        return;
      }

      // Проверка размера файла
      const maxSizeBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxSizeBytes) {
        setFileError(`Размер файла не должен превышать ${maxSizeMB} МБ`);
        setFileName('');
        e.target.value = ''; // Очистить input
        onChange?.(null);
        return;
      }

      setFileName(file.name);
      onChange?.(file);
    };

    const handleRemove = () => {
      setFileName('');
      setFileError('');
      if (ref && 'current' in ref && ref.current) {
        ref.current.value = '';
      }
      onChange?.(null);
    };

    return (
      <div className={styles.fileInputWrapper}>
        {label && (
          <label className={styles.label}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </label>
        )}

        <div className={styles.fileInputContainer}>
          <input
            ref={ref}
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className={styles.hiddenInput}
            id="resume-upload"
          />

          {!fileName ? (
            <label htmlFor="resume-upload" className={styles.uploadButton}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 4V16M4 10H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Выбрать файл
            </label>
          ) : (
            <div className={styles.fileInfo}>
              <div className={styles.fileDetails}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.fileIcon}
                >
                  <path
                    d="M11 2H5C4.46957 2 3.96086 2.21071 3.58579 2.58579C3.21071 2.96086 3 3.46957 3 4V16C3 16.5304 3.21071 17.0391 3.58579 17.4142C3.96086 17.7893 4.46957 18 5 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V8M11 2L17 8M11 2V8H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className={styles.fileName}>{fileName}</span>
              </div>
              <button
                type="button"
                onClick={handleRemove}
                className={styles.removeButton}
                aria-label="Удалить файл"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className={styles.hint}>
          Поддерживаемые форматы: PDF, DOC, DOCX. Максимальный размер:{' '}
          {maxSizeMB} МБ
        </div>

        {(error || fileError) && (
          <span className={styles.errorMessage}>{error || fileError}</span>
        )}
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';
