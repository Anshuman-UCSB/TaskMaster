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

    // let input;
    // if (type === "file") {
    //     input = <Filedrop />;
    // } else {
    //     input = <Textinput onChange={(v) => setText(v.target.value)}/>;
    // }

    return (
      <div className="form">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
        {(type) === "file" && <Filedrop />}
        {(type) === "text" && <Textinput onChange={(v) => {console.log("changed"); setText(v.target.value);}}/>}
        </Grid>
        <Grid item xs={12}>
        <Button 
        variant="contained"
        onClick={submitInfo}>Submit</Button>
        </Grid>
      </Grid>
      </div>
    );
  }
  
  export default Form;