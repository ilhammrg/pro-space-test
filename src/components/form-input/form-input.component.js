import React from 'react';
import styles from './FormInput.module.css';

export default function FormInput({
  type = "",
  label = "",
  placeholder = "",
  value = "",
  handleChange = () => {},
}) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}</label>
      <input 
        type={type}
        required={true}
        className={styles.input}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}