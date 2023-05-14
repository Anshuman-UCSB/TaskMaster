import {React, useState, setState} from 'react';
import {ToggleButtonGroup, ToggleButton, Button, Grid, Item} from '@mui/material';
import Filedrop from './filedrop.js';
import Textinput from './textinput.js';

// slider (text input or pdf)
// button to add & send data to backend

function Form() {
    const [type, setType] = useState("file");
    const [text, setText] = useState("");

    function handleChange(e, value) {
      setType(value);
    }

    function submitInfo() {
      alert("Adding events to calendar!");
      // if text => get text; if pdf => get text from pdf and send to backend
      if (type === "text") {
        console.log(text.length);
        console.log(text);
      } else {

      }
    }

    let input;
    if (type === "file") {
        input = <Filedrop />;
    } else {
        input = <Textinput onChange={(v) => setText(v.target.value)}/>;
    }

    return (
      <div className="form">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} flexDirection="column">
        <Grid item s={6}>
          <div className="toggleButtons">
            <ToggleButtonGroup
            color="primary"
            value={type}
            exclusive
            onChange={handleChange}
            // aria-label="Platform"
            >
                <ToggleButton value="text">Text</ToggleButton>
                <ToggleButton value="file">File</ToggleButton>
            </ToggleButtonGroup>
          </div>
          </Grid>
          <Grid item xs={6} p={2}>
          <submitButton 
            onClick={submitInfo}>Submit</submitButton>
          </Grid>
          <Grid item m={12}>
          {(type) === "file" && <Filedrop/>}
          {(type) === "text" && <Textinput onChange={(v) => {console.log("changed"); setText(v.target.value);}}/>}
        </Grid>
      </Grid>
      </div>
    );
  }
  
  export default Form;