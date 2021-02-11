import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Country from '../../Components/Country/Country'
import styled from 'styled-components'

const CountriesStyle = styled.div`
 div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        background: ${({ theme, dark }) => dark ? theme.primaryDarkBackground : theme.primaryLightBackground};
        color: ${({ theme, dark }) => dark ? theme.primaryDarkText : theme.primaryLightText};
 }

`

const FormStyle = styled.div`

form {
          display: flex;
          justify-content: space-between;
          background: ${({ theme, dark }) => dark ? theme.primaryDarkBackground : theme.primaryLightBackground};
          color: ${({ theme, dark }) => dark ? theme.primaryDarkText : theme.primaryLightText};
} 

input {
          display: inline-flex;
          justify-content: flex-start;
          width: 40em;
          height: 3em;
          margin: 3em;
          background: ${({ theme, dark }) => dark ? theme.primaryDarkElements : theme.primaryDarkText};
          color: ${({ theme, dark }) => dark ? theme.primaryDarkText : theme.primaryLightText};
          border: 1px solid lightgray;
          border-radius: 6px;
 }

 select {
          display: inline-flex;
          justify-content: flex-end;
          background: ${({ theme, dark }) => dark ? theme.primaryDarkElements : theme.primaryDarkText};
        color: ${({ theme, dark }) => dark ? theme.primaryDarkText : theme.primaryLightText};
 }

`

function Coutries({dark}) {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      setCountries(response.data)
      console.log(response.data)
    }
    fetchData()
  }, [])

  const countryJSX = countries.map((country, index) => (
    <Country 
      name={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital}
      flag={country.flag}
      key={index}
      dark={dark}
    />
  ))

  return (
    <>
      <FormStyle dark={dark}>
        <form>
          <label htmlFor="search">
            <input
              type="search"
              placeholder="Search for a country..."
              name='search'
              
            />
            <select name="" id="">
              <option value="">Filter By Region</option>
              <option value="">Africa</option>
              <option value="">America</option>
              <option value="">Asia</option>
              <option value="">Europe</option>
              <option value="">Oceania</option>
            </select>
          </label>
        </form>
      </FormStyle>
    <CountriesStyle dark={dark}>
      <div>
        <div className='countries-div'>{countryJSX}</div>
      </div>
      </CountriesStyle>
    </>
  );
}

export default Coutries;