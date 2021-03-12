import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styles from './Company.module.css';
import Button from '../../components/button/button.component';
import OfficesList from '../../components/office-list/office-list.component';

export default function Company() {
  const history = useHistory();
  const params = useParams();
  const companies = useSelector((state) => state.companies.companyList);
  const allOffices = useSelector((state) => state.offices.allOfficesList);

  const companyId = parseInt(params.companyId);
  const [companyDetail, setCompanyDetail] = useState(null);
  const [officesList, setOfficesList] = useState([]);

  function getCompanyDetail() {
    if (companies.length !== 0) {
      companies.forEach((company) => {
        if (company.id === companyId) {
          setCompanyDetail(company);
        }
      });
    }
  }

  function getOffices() {
    let offices = [];
    if (allOffices.length !== 0) {
      allOffices.forEach((office) => {
        if (office.companyId === companyId) {
          offices.push(office);
        }
      });
    }
    setOfficesList(offices);
  }

  useEffect(() => {
    getCompanyDetail();
    getOffices();
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.companyContainer}>
        <div className={styles.companyHeader}>
          <h2>{companyDetail ? companyDetail.name : ""}</h2>
        </div>
        <div className={styles.companyBody}>
          <div>
            <h3 className={styles.companyItemTitle}>Address:</h3>
            <p className={styles.companyItemText}>{companyDetail ? companyDetail.address : ""}</p>
          </div>
          <div>
            <h3 className={styles.companyItemTitle}>Revenue:</h3>
            <p className={styles.companyItemText}>{companyDetail ? companyDetail.revenue : ""}</p>
          </div>
          <div>
            <h3 className={styles.companyItemTitle}>Phone No:</h3>
            <div className={styles.companyItemText}>
              <span>({companyDetail ? companyDetail.code : ""}){" "}</span>
              <span>{companyDetail ? companyDetail.number : ""}</span>
            </div>
          </div>
          <div className={styles.buttonBackContainer}>
            <Button type="button" onClick={() => history.push("/")}>Back to Overview</Button>
          </div>
         </div>
      </section>
      <section>
        <OfficesList offices={officesList} />
      </section>
    </main>
  );
}