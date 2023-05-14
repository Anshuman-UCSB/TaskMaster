import React from 'react';
import { TextField } from '@mui/material';

function Textinput() {
    return (
      <div className="text-input">
        <TextField 
          fullWidth
          id="outlined-basic" 
          label="Copy-Paste Your Assignment Here:" 
          variant="outlined" 
          multiline
          rows={15}
          // width='100vw'
          margin="normal"
          justifyContent="center"
        />
      </div>
    );
  }
  
  export default Textinput; 