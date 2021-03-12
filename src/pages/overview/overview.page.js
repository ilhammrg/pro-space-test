import React from 'react';
import FormCreateCompany from '../../components/form-create-company/form-create-company.component';
import FormCreateOffice from '../../components/form-create-office/form-create-office.component';
import CompanyList from '../../components/company-list/company-list.component';
import styles from './Overview.module.css';

export default function Overview() {
  return (
    <main className={styles.container}>
      <section className={styles.formSection}>
        <FormCreateCompany />
        <FormCreateOffice />
      </section>
      <section className={styles.companyList}>
        <CompanyList />
      </section>
    </main>
  );
}