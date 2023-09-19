import React from 'react';
import {Link} from "react-router-dom"
import LanguageSwitcher from './LanguageSwitcher';
const Nav=()=>{
   return(
      <div className='nav-ul'> 
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
         </ul>
         <div className='LanguageSwitcher'>
            <LanguageSwitcher />
         </div>
      </div>
   )
}

export default Nav;