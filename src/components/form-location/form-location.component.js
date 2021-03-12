import React from 'react';
import styles from './FormLocation.module.css';

export default function FormInputLocation({
  valueLatitude = 0,
  valueLongitude = 0,
  handleChangeLatitude = () => {},
  handleChangeLongitude = () => {}
}) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>Phone No:</label>
      <div className={styles.containerInput}>
        <input 
          required={true}
          className={styles.input}
          type="number" 
          placeholder="latitude" 
          value={valueLatitude}
          onChange={handleChangeLatitude} 
        />
        <input 
          required={true}
          className={styles.input}
          type="number" 
          placeholder="longitude" 
          value={valueLongitude}
          onChange={handleChangeLongitude}
        />
      </div>
    </div>
  );
}