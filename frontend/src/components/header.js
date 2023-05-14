import React from 'react';
import Login from './login';
import {ToggleButtonGroup, ToggleButton, Button, Grid, Item} from '@mui/material';
import logo from './images/Logo-2-v-1.jpg';


function Header() {
    return (
      <div className="header">
        <h1>
          <div class="wrapper">
            <div className="logo-image">
              <img src={logo} className="logo-image-2" alt="logo"/>
            </div>
          </div>
        </h1>
      </div>
    );
  }
  
  export default Header;