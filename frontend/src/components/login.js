import {React, useContext, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
import {ControlsContext} from '../App';
import {Grid, Item} from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { client } from '../client';
import jwt_decode from "jwt-decode";

const Login = () => {
  // console.log(ControlsContext);
  // TODO: FIGURE OUT WHY THIS IS GETTING UNDERFINEDDD
  const {loggedIn, setLoggedIn} = useContext(ControlsContext);

  const responseGoogle = (response) => {
    console.log(response);
    const userObject = jwt_decode(response.credential);
    console.log(response);
    console.log(userObject);
    //console.log(userObject);
    localStorage.setItem('user', JSON.stringify(userObject));
    const { name, sub, picture } = userObject;
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };
    console.log(localStorage);

    // set logged in to true!
    setLoggedIn(true);
  }

  return (
    <Grid container alignItems="center" justifyContent="center">
    <Grid item xs={12}>
      <div>
        <p>aesthetic intro text here lmao</p>
      </div>
    </Grid>
    <Grid item xs={2}>
    <div className="login-button">
          <div className="">
            <GoogleOAuthProvider 
                // clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                clientId={client}
                >
             <GoogleLogin
              render={(renderProps) => (
                <button
                  type="button"
                  className=""
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
            </GoogleOAuthProvider>
          </div>
    </div>
    </Grid>
    </Grid>
  )
}

export default Login