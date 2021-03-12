import React from 'react';
import styles from './Button.module.css';

export default function Button({
  children = () => <span>Button</span>,
  ...otherProps
}) {
  return (
    <button className={styles.button} {...otherProps}>
      {children}
    </button>
  );
}