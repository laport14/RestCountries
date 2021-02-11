import React, {useState} from 'react'
import {Route} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import "./App.css";
import Nav from './Components/shared/Nav/Nav';
import Countries from './Screens/Countries/Countries'
import CountryDetail from "./Screens/CountryDetail/CountryDetail";
import { themes } from './theme';

function App() {
  const [dark, setDark] = useState(false)

  return (
    <ThemeProvider theme={themes}>
      <div className="App">
        <Nav dark={dark} setDark={setDark}/>
        <Route exact path='/'>
          <Countries dark={dark}/>
        </Route>
          <Route exact path='/:country' component={CountryDetail}/>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
