import React from 'react'
import './Contact.css';

export const Contact = () => {
  return (
    <form> 
    <div class="container">
        <div className='ram'><h1>Contact Form</h1></div>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/><br></br>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required/><br></br>

        <button type="submit">Login</button>
        <label><br></br>
          <input type="checkbox" checked="" name="remember"/> Remember me
        </label>
      </div>

      <div class="container" style={{backgroundColor:"#f1f1f1"}}>
        <button type="button" class="cancelbtn">Cancel</button><br></br>
        <span class="psw"> <a href="#">Forgot password?</a></span>
      </div>
    </form>


  );
}
