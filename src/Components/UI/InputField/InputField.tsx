import React from 'react';
import styles from './InputField.module.css';

const InputField = ({
  title,
  type,
  placeholder,
  value,
  error,
}: {
  title?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  error?: string;
}) => {
  return (
    <div>
      <div className={styles.inputTitle}>
        <p>{title}</p>
      </div>
      <input
        className={styles.inputField}
        type={type}
        placeholder={placeholder}
        value={value}
        maxLength={19}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default InputField;