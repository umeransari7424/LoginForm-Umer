import React from 'react'
import { Link } from 'react-router-dom';


function Signin() {
//   const [email,setEmail] =useState('');
//   const[password,setPassword] = useState('');

  

  return (
   <div  className='bg'>
     <div className='container py-5 register-container'>
      <div className='card p-3 logincard'>

    <form >
    
    <h1 className='text-center'>Sign In Form</h1>
    <br/>
    
    <div className='form-group'>
        
        <label> Email </label> 
        <input type='email' name='email' className='form-control' required placeholder='Enter Your Email'></input>
        <br/>
        <label> Password </label>  
        <input type='password' name='password' className='form-control' placeholder='Enter Your Password'></input>
        
    </div>
    <br/>
    <button type='submit' className='btn btn-primary'>Log In</button>
    <br /><br />

    <span>if you don't have an Account &nbsp;</span><Link to="/signup" >Create Account.</Link> 
    
     
    
    </form>

      </div>
</div>

   </div>
  )
}

export default Signin