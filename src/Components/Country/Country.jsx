import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const CountryStyle = styled.div`
  div {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 300px;
        margin: 30px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        background: ${({ theme, dark }) => dark ? theme.primaryDarkElements : theme.primaryDarkText};
        color: ${({ theme, dark }) => dark ? theme.primaryDarkText : theme.primaryLightText};
  }

  img {
        width: 300px;
        height: 200px;
        background: cover;
        border-radius: 5px 5px 0px 0px;
        object-fit: cover;
  }

  p {
        padding-left: 2em;
        text-align: left;
  }

  .country-name {
        font-weight: bold;
  }

  .country-capital {
    padding-bottom: 1em;
    margin-top: 0;
  }

  .country-population {
      margin-bottom: 0;
  }

  .country-region {
    margin-top: 6px;
    margin-bottom: 6px;
  }

`


function Country({ name, population, region, capital, flag, dark }) {


  return (
    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/${name}`}>
      <CountryStyle dark={dark}>
        <div>
          <img src={flag} alt='' />
          <p className='country-name'>{name}</p>
          <p className='country-population'><b>Population:</b> {population}</p>
          <p className='country-region'><b>Region:</b> {region}</p>
          <p className='country-capital'><b>Capital:</b> {capital}</p>
        </div>
      </CountryStyle>
    </Link>
  );
}

export default Country;