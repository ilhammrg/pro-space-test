import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import officesTypes from '../../redux/offices/offices.types';
import FormInput from '../form-input/form-input.component';
import FormSelectCompany from '../form-select-company/form-select-company.component';
import FormLocation from '../form-location/form-location.component';
import Button from '../button/button.component';
import styles from '../form-create-company/FormCreateCompany.module.css';
import { getPositiveFloat, getPositiveNumber } from '../../utils/general-utils';

export default function FormCreateOffice() {
  const dispatch = useDispatch();
  const companyList = useSelector((state) => state.companies.companyList);

  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [startDate, setStartDate] = useState("");
  const [companyId, setCompanyId] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeLatitude(event) {
    setLatitude(getPositiveFloat(event.target.value));
  }

  function handleChangeLongitude(event) {
    setLongitude(getPositiveFloat(event.target.value));
  }

  function handleChangeStartDate(event) {
    setStartDate(event.target.value);
  }

  function handleChangeCompany(event) {
    setCompanyId(getPositiveNumber(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const officeToAdd = {
      name: name,
      latitude: latitude,
      longitude: longitude,
      startDate: startDate,
      companyId: companyId,
    }

    dispatch({ 
      type: officesTypes.ADD_OFFICES, 
      payload: officeToAdd 
    });

    window.alert(`Office ${name} created!`);

    window.location.reload();
  }

  return (
    <form method="post" onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.title}>Create Office</h2>
      <FormInput 
        type="text"
        label="Name:"
        placeholder="name"
        value={name}
        handleChange={handleChangeName}
      />
      <FormLocation 
        valueLatitude={latitude}
        valueLongitude={longitude}
        handleChangeLatitude={handleChangeLatitude}
        handleChangeLongitude={handleChangeLongitude}
      />
      <FormInput 
        type="date"
        label="Office Start Date:"
        placeholder="date"
        value={startDate}
        handleChange={handleChangeStartDate}
      />
      <FormSelectCompany 
        options={companyList}
        value={companyId}
        handleChange={handleChangeCompany}
      />
      <Button type="submit">
        <span>Create</span>
      </Button>
    </form>
  );
}