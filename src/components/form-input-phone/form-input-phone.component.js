import React from 'react';
import styles from './FormPhone.module.css';

export default function FormInputPhone({
  valueCode = 0,
  valueNumber = 0,
  handleChangeCode = () => {},
  handleChangeNumber = () => {}
}) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>Phone No:</label>
      <div className={styles.containerInput}>
        <input 
          required={true}
          className={styles.inputCode}
          type="number" 
          placeholder="code" 
          value={valueCode}
          onChange={handleChangeCode} 
        />
        <input 
          required={true}
          className={styles.inputNumber}
          type="number" 
          placeholder="number" 
          value={valueNumber}
          onChange={handleChangeNumber}
        />
      </div>
    </div>
  );
}