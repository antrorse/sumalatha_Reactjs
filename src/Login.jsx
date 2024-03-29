import React, { useState } from "react";

export const Login=(props) => {
    const [email,setEmail]= useState('');
   const [pass,setPass]= useState('');

   const handleSubmit =(e) =>{ 
    e.preventDefault();
    console.log(email);
  };
  function handleChange(event) {
    console.log(event.target.value);
  }
    return(
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="Login-form" onSubmit={handleSubmit}>
            <label htmlFor ="email">email</label>
        <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        <label htmlFor ="password">password</label>
        <input onChange={e => setPass(e.target.value)} value={pass} type="password" placeholder="********" id="password" name="password"/>
        <button type="submit"> Log In</button>
        <button className="link-btn" onClick={()=>props.onFormSwitch('Register')}>Don't have an account? Register here.</button>
        </form>
        
        </div>
    );
}
