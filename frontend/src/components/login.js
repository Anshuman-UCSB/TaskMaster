import {React, useContext, useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import {ControlsContext} from '../App';
import {Grid, Item, Button} from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { client } from '../client';
import jwt_decode from "jwt-decode";
import schedule from "./images/scheduler.png";

const Login = () => {
  // console.log(ControlsContext);
  // TODO: FIGURE OUT WHY THIS IS GETTING UNDERFINEDDD
  const {loggedIn, setLoggedIn} = useContext(ControlsContext);

  function getCreds(){
    const creds = new URL("http://localhost:5000/oauth");
    fetch(creds, {
        method: 'GET',
        mode: 'cors',
      })
      .then(data => {
        console.log(data);
        setLoggedIn(true);
        return true;
    });
  }
  
  return (
    <Grid container alignItems="center" justifyContent="center">
    <Grid item xs={6}>
      <div className="intro">
        <h3 className="intro-text">Introducing the ultimate solution to managing your daily tasks and assignments - our cutting-edge task scheduler!</h3> 
        <p className="intro-text">Designed with convenience in mind, this powerful tool automatically parses assignments, creates bite-sized subtasks, and integrates them into your personal calendar as to-do items. With our task scheduler, you can say goodbye to missed deadlines and forgotten tasks, and say hello to a more organized and efficient workflow. Whether you're a busy professional, a student with a heavy workload, or simply looking for a better way to manage your daily tasks, our all in one task tool is the perfect solution for you. Try it out today and take the first step towards a more productive and stress-free life!</p>
      </div>
    </Grid>
    <Grid item xs={6}>
      <img src={schedule} className="schedule-image" alt="schedule" />
    </Grid>
    <Grid item xs={6}>
    <div className="login-button">
          <div className="">
            <Button
              variant="contained"
              onClick={getCreds}
              style={{
                backgroundColor: "##ffffff",
              }}
            >
              <FcGoogle className="" /> Sign in with google
            </Button>
          </div>
    </div>
    </Grid>
    </Grid>
  )
}

export default Login


  // < Grid item xs = { 12} >
  //   <Button
  //     variant="contained"
  //     onClick={submitInfo}
  //     style={{
  //       backgroundColor: "##bdebd7",
  //     }}
  //   >Submit</Button>
  //       </Grid >