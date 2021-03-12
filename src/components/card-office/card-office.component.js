import React from 'react';
import { useDispatch } from 'react-redux';
import officesTypes from '../../redux/offices/offices.types';
import styles from '../card-company/Card.module.css';
import DeleteButton from '../delete-button/delete-button.component';

export default function CardOffice({ officeItem }) {
  const dispatch = useDispatch();

  const { name, latitude, longitude, startDate } = officeItem; 

  function handleDelete() {
    const prompt = window.confirm(`Are you sure want to remove ${name}?`);
    if (prompt) {
      dispatch({type: officesTypes.DELETE_OFFICES, payload: officeItem});
      window.location.reload();
    }
  }

  return (
    <li className={styles.container} title="">
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{name}</h3>
        <DeleteButton handleClick={handleDelete} />
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyItem}>
          <h4 className={styles.cardItemLabel}>Location:</h4>
          <div className={styles.cardItemText}>
            <p style={{ margin: "0" }}>{"Lat - "}{latitude}</p>
            <p style={{ margin: "0" }}>{"Log - "}{longitude}</p>
          </div>
        </div>
        <div className={styles.cardBodyItem}>
          <h4 className={styles.cardItemLabel}>Office Start Date:</h4>
          <p className={styles.cardItemText}>{startDate}</p>
        </div>
      </div>
    </li>
  )
}