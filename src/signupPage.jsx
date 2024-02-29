import React from 'react'
import './signupPage.css'

function SignupPage() {

  function signUpFunc(params) {
    window.location.href='/login';
  }

  return (
    <div className='signUpContainer'>
      <label htmlFor="userId" style={{color:'white'}}>User Id:</label>
      <input className='userId' type='text'></input>
      <br/>
      <label htmlFor="password" style={{color:'white'}}>password:</label>
      <input className='password' type='password'></input>
      <br/>
      <button className='signUpBtn' onClick={()=> signUpFunc()}>Sign up</button>

    </div>
  )
}

export default SignupPage;