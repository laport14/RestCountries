import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components'


const NavStyling = styled.div`
  div {
        display: flex;
        justify-content: space-between;
        box-shadow: 0 2px 8px 0 rgba(159, 156, 156, 0.44);
        padding-left: 4em;
        padding-right: 4em;
        height: 10vh;
        background: ${({ theme, dark }) => dark ? theme.primaryDarkElements : theme.primaryLightElement};
        color: ${({ theme, dark }) => dark ? theme.primaryDarkText : theme.primaryLightText};
  }

  p {
        margin-top: 1em;
        align-self: center;
  }

  .logo {
        font-weight: bold;
        font-size: 20px;
        margin-top: 1em;
  }


`

function Nav({dark, setDark}) {
  return (
    <NavStyling dark={dark} onClick={() => setDark(!dark)}>
      <div>
        <p className='logo'>Where in the World?</p>
        <p><FontAwesomeIcon icon={faMoon}/>Dark mode</p>
      </div>
    </NavStyling>
  );
}

export default Nav;