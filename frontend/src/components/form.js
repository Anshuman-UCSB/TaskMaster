import {React, useState, setState} from 'react';
import {ToggleButtonGroup, ToggleButton, Button, Grid, Item, TextField} from '@mui/material';
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

    function handleTextChange(e, value) {
      console.log("value: ", value);
      setText(value);
    }

    function submitInfo() {
      alert("Adding events to calendar!");
      // if text => get text; if pdf => get text from pdf and send to backend
      console.log(text);
      let postData = {
        "text": text,
      }

      const textInfoUrl = new URL("localhost:5000/assignment/text");
      fetch(textInfoUrl, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        })
        .then(r => r.json())
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