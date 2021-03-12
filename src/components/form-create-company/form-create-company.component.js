import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import companiesTypes from '../../redux/companies/companies.types';
import FormInput from '../form-input/form-input.component';
import FormInputPhone from '../form-input-phone/form-input-phone.component';
import Button from '../button/button.component';
import styles from './FormCreateCompany.module.css';
import { getPositiveNumber } from '../../utils/general-utils';

export default function FormCreateCompany() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [revenue, setRevenue] = useState("");
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeAddress(event) {
    setAddress(event.target.value);
  }

  function handleChangeRevenue(event) {
    setRevenue(getPositiveNumber(event.target.value));
  }

  function handleChangeCode(event) {
    setCode(getPositiveNumber(event.target.value));
  }

  function handleChangeNumber(event) {
    setNumber(getPositiveNumber(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    const companyToAdd = {
      name: name,
      address: address,
      revenue: revenue,
      code: code,
      number: number,
    }

    dispatch({ 
      type: companiesTypes.ADD_COMPANY, 
      payload: companyToAdd
    });

    window.alert(`Company ${name} created!`);
    
    window.location.reload();
  }

  return (
    <form method="post" onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.title}>Create Company</h2>
      <FormInput 
        type="text"
        label="Name:"
        placeholder="name"
        value={name}
        handleChange={handleChangeName}
      />
      <FormInput 
        type="text"
        label="Address:"
        placeholder="address"
        value={address}
        handleChange={handleChangeAddress}
      />
      <FormInput 
        type="number"
        label="Revenue:"
        placeholder="revenue"
        value={revenue}
        handleChange={handleChangeRevenue}
      />
      <FormInputPhone 
        valueCode={code}
        valueNumber={number}
        handleChangeCode={handleChangeCode}
        handleChangeNumber={handleChangeNumber}
      />
      <Button type="submit">
        <span>Create</span>
      </Button>
    </form>
  );
}