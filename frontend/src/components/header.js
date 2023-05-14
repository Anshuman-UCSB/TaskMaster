import React from 'react';
import Login from './login';
import {ToggleButtonGroup, ToggleButton, Button, Grid, Item} from '@mui/material';
import logo from './images/new-logo.png';


function Header() {
    return (
      <div className="header">
        <h1>
          <div class="wrapper">
            <img src={logo} className="logo-image-2" alt="logo"/>
          </div>
        </h1>
      </div>
    );
  }
  
  export default Header;