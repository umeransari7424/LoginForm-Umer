import React, { useState } from "react";
import { Link } from "react-router-dom";




function Signup(prop) {

  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
  const Formsubmit = (e) => {
    
    e.preventDefault();
    console.log("first_name", firstName)
    console.log("last_name", lastName);
    console.log("email", email);
    console.log("password", password);
  
    setFirstName('');
    setLastName('');
    setEmail('');
    setpassword('');
    
  } 

  return (
    <div className="bg">

    <div className="container py-5 register-container">
      <div className="card p-3 logincard">
        <form onSubmit={Formsubmit}>
          <h1 className="text-center">Sign Up</h1>
          <br />

          <div className="form-group">
            <label>First Name </label>
            <input
              type="text"
              name="first_name"
              onChange={(e)=>setFirstName(e.target.value)}
              className="form-control"
              required
              placeholder="Enter Your First Name"
            ></input>

            <br />
            <label>Last Name </label>
            <input
              type="text"
              name="l_name"
              onChange={(e)=>setLastName(e.target.value)}
              className="form-control"
              required
              placeholder="Enter Your Last Name"
              ></input>

            <br />
            <label> Email </label>
            <input
              type="email"
              name="email"
              onChange={(e)=>email(e.target.value)}
              className="form-control"
              required
              placeholder="Enter Your Email"
              ></input>
            <br />
            <label> Password </label>
            <input
              type="password"
              onChange={(e)=>setpassword(e.target.value)}
              name="password"
              className="form-control"
              placeholder="Enter Your Password"
              ></input>
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Save
          </button> &nbsp;
          <Link to="/">
          <button type="submit" className="btn btn-primary ">
           Back  
          </button>
          </Link><br /><br />
          <span> Do you have an account?&nbsp;</span><Link to="/signin" >Sign In</Link> 
        </form>
      </div>
              </div>
    </div>
  );
}

export default Signup;
