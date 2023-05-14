import logo from './logo.svg';
import {React, useState, createContext, useContext} from 'react';
import './App.css';
import Header from './components/header.js';
import Form from './components/form.js';
import Login from './components/login.js';

const ControlsContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <ControlsContext.Provider 
      value={{ 
        loggedIn, setLoggedIn,
      }}
    >
    <div className="App">
      <Header />
      {loggedIn ? <Form /> : <Login />}
    </div>
    </ControlsContext.Provider>
  );
}

export { ControlsContext };
export default App;
