import React from 'react';
import styles from '../form-input/FormInput.module.css';

export default function FormSelectCompany({
  options = [],
  value = "",
  handleChange = () => {}
}) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>Company:</label>
      <select 
        required={true}
        placeholder="select company"
        className={styles.input}
        onChange={handleChange}
        value={value}
        style={{
          backgroundColor: "#fff"
        }}
      >
        <option value="">select company</option>
        {options.length !== 0 ?
          options.map((option) => 
            <option key={option.address+option.name} value={option.id}>
              {option.name}
            </option>
          )
          :
          <option disabled>There is no company created yet</option>
        }
      </select>
    </div>
  )
}