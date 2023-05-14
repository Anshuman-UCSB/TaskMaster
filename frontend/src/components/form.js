import {React, useState, setState} from 'react';
import {ToggleButtonGroup, ToggleButton, Button, Grid, Item} from '@mui/material';
import Filedrop from './filedrop.js';
import Textinput from './textinput.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#858bca',
      light: '#bdebd7',
      dark: '#73cea7',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#858bca',
      light: '#c8cbe9',
      dark: '#858bca',
      contrastText: '#000000',
    },
  },
});

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
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} flexDirection="row">
        <Grid item xs={2} justifyContent="flex-end">
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
          <Grid item xs={2} justifyContent="flex-end">
            <ThemeProvider theme={theme}>
              <div className="submitButton"> 
              <Button color ="secondary"
                onClick={submitInfo}>Submit</Button>
                </div>
            </ThemeProvider>
          </Grid>
      </Grid>
        <div className="text-form-field">
              {(type) === "file" && <Filedrop/>}
              {(type) === "text" && <Textinput onChange={(v) => {console.log("changed"); setText(v.target.value);}}/>}
        </div>
      </div>
    );
  }
  
  export default Form;