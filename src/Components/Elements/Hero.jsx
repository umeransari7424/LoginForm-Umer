import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg">
      <div className="contianer text-center d-flex align-items-center justify-content-center">
        <div className="card herocard">
          <h1>Register Here</h1> <br />

          <Link to="/signin">
            <button type="button" class="btn btn-primary">
              Log In
            </button>
          </Link><br /><br />
          <span>if you don't have an Account. &nbsp;</span><Link to="/signup" >Create Account.</Link> 
        </div>
      </div>
    </div>
  );
}

export default Hero;
