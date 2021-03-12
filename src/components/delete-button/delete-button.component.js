import React from 'react';
import styles from './Delete.module.css';

export default function DeleteButton({
  handleClick = () => {}
}) {
  return (
    <button 
      type="button" 
      className={styles.deleteButton} 
      onClick={handleClick}
      title="Delete"
    >
      &#10005;
    </button>
  );
}