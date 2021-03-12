import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import companiesTypes from '../../redux/companies/companies.types';
import styles from './Card.module.css';
import DeleteButton from '../delete-button/delete-button.component';

export default function CardCompany({ companyItem }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id, name, address, revenue, code, number } = companyItem; 

  function handleDelete() {
    const prompt = window.confirm(`Are you sure want to remove ${name}?`);
    if (prompt) {
      dispatch({type: companiesTypes.DELETE_COMPANY, payload: companyItem});
    }
  }

  function handleCompanyDetail() {
    history.push(`/company/${id}`);
  }

  return (
    <li className={styles.container} title={name}>
      <div className={styles.cardHeader}>
        <h3 className={styles.title}>{name}</h3>
        <DeleteButton handleClick={handleDelete} />
      </div>
      <div className={styles.cardBody} onClick={handleCompanyDetail}>
        <div className={styles.cardBodyItem}>
          <h4 className={styles.cardItemLabel}>Address:</h4>
          <p className={styles.cardItemText}>{address}</p>
        </div>
        <div className={styles.cardBodyItem}>
          <h4 className={styles.cardItemLabel}>Revenue:</h4>
          <p className={styles.cardItemText}>{revenue}</p>
        </div>
        <div className={styles.cardBodyItem}>
          <h4 className={styles.cardItemLabel}>Phone No:</h4>
          <div className={styles.cardItemText}>
            <span>({code}){" "}</span>
            <span>{number}</span>
          </div>
        </div>
      </div>
    </li>
  )
}