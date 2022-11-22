import './App.css';
import { useState, useContext } from 'react';
import { Intro } from './components/intro/Intro';
import { About } from './components/about/About';
import { Productlist } from './components/productlist/Productlist';
import Contact from './components/contact/Contact';
import { Toggle } from './components/toggle/Toggle';
import { ThemeContext } from './context';

function App() {

  const theme =useContext(ThemeContext)
  const darkMode= theme.state.darkMode;

  return (
    <div className="App">
      <div>  
        <div style ={{backgroundColor: darkMode?  "#222":"White",color:darkMode && "White"}}>
        <Toggle/>
        <Intro/>
        <About/>
        <Productlist/>
        <Contact/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
