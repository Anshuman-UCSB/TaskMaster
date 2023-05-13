import {React, useState} from 'react';
import {ToggleButtonGroup, ToggleButton} from '@mui/material';
import Filedrop from './filedrop.js';
import Textinput from './textinput.js';

// slider (text input or pdf)
// button to add & send data to backend

function Form() {
    let type = useState("");
    function handleChange() {

    }
    return (
      <div className="form">
        <ToggleButtonGroup
        color="primary"
        value={type}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        >
            <ToggleButton value="text">Text</ToggleButton>
            <ToggleButton value="file">File</ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  }
  
  export default Form;