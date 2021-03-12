import React from 'react';
import CardOffice from '../card-office/card-office.component';
import styles from '../company-list/CompanyList.module.css';

export default function OfficesList({ offices }) {
  return (
    <div className={styles.container}>
      <h2>Companies</h2>
      <ul className={styles.list}>
        { offices.length !== 0 ?
          offices.map((office) => 
            <CardOffice 
              key={office.id} 
              officeItem={office}
            />
          )
          : 
          <p>There is no offices created yet.</p>
        }
      </ul>
    </div>
  );
}