import React, { useState, useEffect } from 'react';
import {fetchCountries} from '../api';
import { NativeSelect, FormControl } from '@material-ui/core';

export const  CountryPicker = ( {handleCountryChange} ) => {
    const [fetchedCounties, setFetchedCounties] = useState([]);

    useEffect(() => {
        const fetchApi = async() => {
            setFetchedCounties(await fetchCountries());
        }

        fetchApi();
        
    },[setFetchedCounties]);

    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option className="opt-li" value="global">Global</option>
                {fetchedCounties.map((country, i) => <option className="opt-li" key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
