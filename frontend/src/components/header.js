import React from 'react';
import Login from './login';
import {ToggleButtonGroup, ToggleButton, Button, Grid, Item} from '@mui/material';
import logo from './images/SBHacks-Logo.png';


function Header() {
    return (
      <div className="header">
        <h1>
          <div class="wrapper">
            <Grid container spacing = {2}>
              <Grid item xs={4}>
                <div className="logo-image">
                  <img src={logo} className="logo-image-2" alt="logo"/>
                </div>
              </Grid>
              <Grid item xs={4}>
                Taskey
              </Grid>
            </Grid>
          </div>
        </h1>
      </div>
    );
  }
  
  export default Header;