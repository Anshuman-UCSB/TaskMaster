import React from 'react';
import Login from './login';
import logo from './images/SBHacks-Logo.png';

function Header() {
    return (
      <div className="header">
        <h1>
          <div class="wrapper">
            <header1>
              <div className="logo-image">
                <img src={logo}/>
              </div>
              Taskey
            </header1>
          </div>
        </h1>
        <Login />
      </div>
    );
  }
  
  export default Header;