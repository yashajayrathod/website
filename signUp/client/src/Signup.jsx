import {useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const navigate =useNavigate()

  const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:3001/register',{name,email,password})
  .then(result => {console.log(result)
//     navigate('/login')

//   })
//   .catch(err=>console.log(err))

//  }
console.log(result); // Add this line to see the response data
if(result.data === 'Email already exists') {
  alert('Login failed'); // Add this line to check if this block is executed

 
} else {
  console.log('Successfully logged in'); // Add this line to check if this block is executed
  navigate('/login')
}
})
.catch(err => console.log(err))

  }


  return (
      <div className="d-flex justify-content-center align-item-center bg-secondary vh-100 "> 
      <div className="bg-white p-3 rounder w-25">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">
            <strong>Name</strong>
          </label>
          <input
          type="text"
          placeholder="eg.Yash Rathod"
          autoComplete="off"
          name="name"
          onChange={(e)=> setName(e.target.value)}
          className="form-control rounded-0"/>
          
        </div>

        <div className="mb-3">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
          type="email"
          placeholder="eg. yashrathod@trailique.com"
          autoComplete="off"
          name="email"
          onChange={(e)=> setEmail(e.target.value)}
          className="form-control rounded-0"/>
          
        </div>

        <div className="mb-3">
          <label htmlFor="email">
            <strong>Password</strong>
          </label>
          <input
          type="password"
          placeholder="password"
          autoComplete="off"
          name="password"
          onChange={(e)=> setPassword(e.target.value)}
          className="form-control rounded-0"/>
          
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">Register</button>
        </form>
       <p>Already Have an Account</p>

        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
      
      </div>
      </div>
    
  );
}

export default Signup
