import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const countriess = await fetchCountries();
      setCountries(countriess);
    };
    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue={''} onChange={(event) => handleCountryChange(event.target.value)}>
        <option value=''>Global</option>
        {

          countries.map((country, i) => (
            <option key={i} value={country}>{country}</option>
          ))
        }
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;