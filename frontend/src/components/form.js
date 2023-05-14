import {React, useState, setState} from 'react';
import {ToggleButtonGroup, ToggleButton, Button, Grid, Item, TextField} from '@mui/material';
import Filedrop from './filedrop.js';
import Textinput from './textinput.js';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#bdebd7',
      main: '#73cea7',
      dark: '#bdebd7',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
  },
});

const outputs = ["...connecting to backend", "...integrating with openAI!", "...waiting for text generation", "...parsing response!", "...connecting to google calendar!", "...adding events to your calendar!", "...events added!", "done!"];

// slider (text input or pdf)
// button to add & send data to backend

function Form() {
    const [type, setType] = useState("text");
    const [text, setText] = useState("");

    function handleChange(e, value) {
      setType(value);
    }

    // function handleTextChange(e, value) {
    //   console.log("value: ", value);
    //   setText(value);
    // }

    function submitInfo() {
      alert("Adding events to calendar!");
      // if text => get text; if pdf => get text from pdf and send to backend
      console.log(text);
      let postData = {
        "text": text,
      }


      // const textInfoUrl = new URL("http://localhost:5000/");
      // fetch(textInfoUrl, {
      //     method: 'GET',
      //     mode: 'no-cors',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     // body: JSON.stringify(postData)
      //   })
      //   // .then(r => r.json())
      //   .then(data => {
      //     console.log(data);
      //     return true;
      // });

      const textInfoUrl = new URL("http://localhost:5000/assignment/text");
      fetch(textInfoUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        })
        // .then(r => r.json())
        .then(data => {
          console.log(data);
          return true;
      });
    
      // localhost:5000/assignment/text

    }

    // let input;
    // if (type === "file") {
    //     input = <Filedrop />;
    // } else {
    //     input = <Textinput onChange={(v) => setText(v.target.value)}/>;
    // }

    return (
      <div className="form">
      <div>
        <br></br>
      </div>
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
        <div className="content-box">
        {(type) === "file" && <Filedrop />}
        {(type) === "text" && 
        <TextField 
        onChange={(e) => setText(e.target.value)}
        fullWidth
        id="outlined-basic" 
        label="Assignment" 
        variant="outlined" 
        multiline
        rows={15}
        width='100vw'
        />
        }
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
        </ThemeProvider>
      </div>
    );
  }
  
  export default Form;