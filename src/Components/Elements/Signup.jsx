import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [registration, setRegistration] = useState({
    name:"",
    l_name:"",
    email:"",
    password:"",
   
  });
  // const [names, setNames] = useState('');
  // const [l_name, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setpassword] = useState("");

  // useEffect(() => {
    // storing input name
    // localStorage.setItem("name", JSON.stringify(names));
    

  // }, [names]);
    


  // useEffect(() => {
  //   const names = JSON.parse(localStorage.getItem('names'));
  //   if (names) {
  //     const naam = setNames(names);
  //    console.log(naam);
  //   }
  // }, []);

const changeHandler=(e)=>{ 
  const name = e.target.name;
  const value = e.target.value;

  setRegistration({...registration,[name]: value});
}
  
  

  const formSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...registration, id: new Date().getTime().toString() }
    console.log(newRecord);
    localStorage.setItem('keys', JSON.stringify(newRecord));
    // console.log(localStorage.setItem('keys', JSON.stringify(newRecord)))
    // const name = e.target.name.value;
    // const last_name = e.target.last_name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log("first_name", names);
    // console.log("last_name", l_name);
    // console.log("email", email);
    // console.log("password", password);
    // console.log(localStorage.setItem('name', JSON.stringify(names)));
  
     
  };
  // const namevalue =(e)=>{
  //   const name = e.target.value;
  //   console.log(name);
  // }

  return (
    <div className="bg">
      <div className="container py-5 register-container">
        <div className="card p-3 logincard">
          <form onSubmit={formSubmit}>
            <h1 className="text-center">Sign Up</h1>
            <br />
            <div className="form-group">
              <label>First Name </label>
              <input
                type="text"
                name="name"
                // onChange={namevalue}
                onChange={changeHandler}
                value={registration.name}
                className="form-control"
                required
                placeholder="Enter Your First Name"
              ></input>

              <br />
              <label>Last Name </label>
              <input
                type="text"
                name="l_name"
                onChange={changeHandler}
                className="form-control"
                value={registration.l_name}
                // required
                placeholder="Enter Your Last Name"
              ></input>

              <br />
              <label> Email </label>
              <input
                type="email"
                name="email"
                onChange={changeHandler}
                value={registration.email}
                className="form-control"
                // required
                placeholder="Enter Your Email"
              ></input>
              <br />
              <label> Password </label>
              <input
                type="password"
                onChange={changeHandler}
                value={registration.password}
                name="password"
                className="form-control"
                placeholder="Enter Your Password"
              ></input>
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Save
            </button>{" "}
            &nbsp;
            <Link to="/">
              <button type="submit" className="btn btn-primary ">
                Back
              </button>
            </Link>
            <br />
            <br />
            <span> Do you have an account?&nbsp;</span>
            <Link to="/signin">Sign In</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
