import {React, useState, setState} from 'react';
import {ToggleButtonGroup, ToggleButton, Button} from '@mui/material';
import Filedrop from './filedrop.js';
import Textinput from './textinput.js';

// slider (text input or pdf)
// button to add & send data to backend

function Form() {
    const [type, setType] = useState("file");

    function handleChange(e, value) {
        setType(value);
    }

    let input;
    if (type === "file") {
        input = <Filedrop />;
    } else {
        input = <Textinput />;
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

        {input}
        <Button variant="contained">Submit</Button>
      </div>
    );
  }
  
  export default Form;