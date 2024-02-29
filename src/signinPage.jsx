import React from 'react'
import './signupPage.css'
import { useState } from 'react'

function SignupPage({showUSerID}) {
  
  //function to take the value of .userId and export it to the parent file
  
  let [userID, setUserID]= useState(''); 


  function loginFunc() {
    // let val=document.querySelector('.userId').value;
    setUserID(document.querySelector('.userId').value);
    showUSerID(document.querySelector('.userId').value);
    console.log(document.querySelector('.userId').value);
    setTimeout(() => {
        window.location.href='/';
    }, 3000);
  }  

  return (
    <div className='signInContainer'>
      <label htmlFor="userId" style={{color:'white'}}>User Id:</label>
      <input className='userId' type='text'></input>
      <br/>
      <label htmlFor="password" style={{color:'white'}}>password:</label>
      <input className='password' type='password'></input>
      <br/>
      <button className='signUpBtn' onClick={()=>loginFunc()}>Log In</button>

    </div>
  )
}

export default SignupPage;