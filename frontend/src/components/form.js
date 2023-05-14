import {React, useState, setState} from 'react';
import {ToggleButtonGroup, ToggleButton, Button, Grid, Item} from '@mui/material';
import Filedrop from './filedrop.js';
import Textinput from './textinput.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#bdebd7',
      main: '#73cea7',
      dark: '#bdebd7',
      contrastText: '#000',
    },
    secondary: {
      light: '#000',
      main: '#000',
      dark: '#000',
      contrastText: '#000',
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
        <ThemeProvider theme={theme}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} flexDirection="row">
      <Grid item xs={12}>
        <div className="toggle-button">
        <ToggleButtonGroup
        color="secondary"
        value={type}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        style={{
        backgroundColor: "#73cea7",
    }}
        >
            <ToggleButton value="text">Text</ToggleButton>
            <ToggleButton value="file">File</ToggleButton>
        </ToggleButtonGroup>
        </div>
        </Grid>
        <Grid item xs={12}>
        <Button 
        variant="contained"
        onClick={submitInfo}
        style={{
        backgroundColor: "##bdebd7",
        }}
        >Submit</Button>
        </Grid>

      </Grid>
        <div className="text-form-field">
              {(type) === "file" && <Filedrop/>}
              {(type) === "text" && <Textinput onChange={(v) => {console.log("changed"); setText(v.target.value);}}/>}
        </div>
        </ThemeProvider>
      </div>
    );
  }
  
  export default Form;