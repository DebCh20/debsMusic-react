import logo from './logo.svg';
import './App.css';
import Songplay from './Songplay';
import Songlist from './Songlist';
import SignupPage from './signupPage';
import SigninPage from './signinPage';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {

  function signUpFunction(){
    window.location.href="/signup";
  }
  function logInFunction(){
    window.location.href="/login";
  }

  const [userId, setUserId] = useState('Hola');

  // Callback function to receive data from the child
  const handleUserInput = (userInput) => {
    setUserId(userInput);
    console.log('parent',userInput);
  };

  return (
    <>
    <div className='header'>
        <button className='SignUpBtn' onClick={()=>{signUpFunction()}}>Sign up</button>
        <button className='logInBtn' onClick={()=>{logInFunction()}}>Log in</button>
    </div>
    <p>{userId}</p>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Songplay></Songplay>}>
          <Route path="" element={<Songlist></Songlist> } />
        </Route>
        <Route path="/login" element={<SigninPage showUSerID={handleUserInput} />} />
      </Routes>
    </Router>       
    </>
  );
}

export default App;
