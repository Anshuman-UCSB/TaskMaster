import React from 'react';
import { TextField } from '@mui/material';

function Textinput() {
    return (
      <div className="text-input">
        <TextField 
        fullWidth
        id="outlined-basic" 
        label="Assignment" 
        variant="outlined" 
        multiline
        rows={15}
        width='100vw'
        />
      </div>
    );
  }
  
  export default Textinput; 