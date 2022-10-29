import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

import { ThemeContext } from './contexts/theme';
import { useContext } from 'react';
import logo from './images/icon.png'


export default function Navbar() {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext);

  return (
    
  <div className="topnav">
   
    <Link to="/" className="active">RX TRAVELS   <img className='new' alt='' src={logo}/></Link>
   
<input type="checkbox" name="checkbox" class="switch" onChange={toggleTheme}/>

   
  </div>
  )
}
