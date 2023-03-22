import React from 'react';
import './Country.css'
const Country = (props) => {
//   console.log(props.country);
  const {name,population, area, region,flags} = props.country;
    return (
        <div className='country bg-warning'>
            
            <h2>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population :{population} </p>
            <p><small>area :{area}</small></p>
            <p>Region: {region}</p>
            {/* <h2>Name : {props.country.name.common}</h2>
            <p>Population :{props.country.population} </p>
            <p><small>area :{props.country.area}</small></p>
            <p>Region: {props.country.region}</p> */}
        </div>
    );
};

export default Country;