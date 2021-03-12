import React from 'react';
import { useSelector } from 'react-redux';
import CardCompany from '../card-company/card-company.component';
import styles from './CompanyList.module.css';

export default function CompanyList() {
  const companyList = useSelector((state) => state.companies.companyList);

  return (
    <div className={styles.container}>
      <h2>Companies</h2>
      <ul className={styles.list}>
        { companyList.length !== 0 ?
          companyList.map((company) => 
            <CardCompany 
              key={company.id} 
              companyItem={company}
            />
          )
          : 
          <p>There is no companies created yet.</p>
        }
      </ul>
    </div>
  );
}