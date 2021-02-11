import React, { useEffect, useState } from 'react';
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'

function CountryDetail(props) {

  const [country, setCountry] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://restcountries.eu/rest/v2/name/${props.match.params.country}`)
      setCountry(response.data[0])
      console.log(response.data[0])
    }
    fetchData()
  }, [])

  function languages(array){
    return array?.map((element, index) => (index ? ', ' : '') + element.name)
  }


  return (
    <div>
      <Link to='/'><button>Back</button></Link>
      <div>
        <img src={country?.flag} alt="" />
      </div>
      <div>
        <div>{country?.name}</div>
        <div>Native Name: {country?.nativeName}</div>
        <div>Population: {country?.population}</div>
        <div>Region: {country?.region}</div>
        <div>Sub Region: {country?.subregion}</div>
        <div>Capital: {country?.capital}</div>
        <div>Top Level Domain: {country?.topLevelDomain}</div>
        <div>Currencies: {country?.name}</div>
        <div>Languages: {languages(country?.languages)}</div>
      </div>
      
    </div>
  );
}

export default withRouter(CountryDetail);