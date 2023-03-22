import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = () => {
    const [Countries, SetCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => SetCountries(data))
    }, [])
    return (
        <div>
            <h2>Wel come to my country list !!{Countries.length}</h2>
          <div className='countries-container'>
          {
                Countries.map(country => <Country
                    country = {country}
                    key = {country.cca2}
                    // name={country.name.common}
                    // population={country.population}
                    // area ={country.area}
                    // region={country.region}


                ></Country>)
            }
          </div>

        </div>
    );
};

export default Countries;