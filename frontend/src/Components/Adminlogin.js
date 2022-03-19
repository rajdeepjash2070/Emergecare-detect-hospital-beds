import React from 'react'
import { useState } from 'react'
 import Navbar from './Navbar'
 import axios from "axios"
 import { useNavigate } from 'react-router-dom'
import "../App.css"
const Adminlogin = () => {
    const history=useNavigate();
    const [inputs,setInputs]=useState({
  
  email:"",
password:"",

    });
    const handleChange=(e)=>{
        setInputs((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value
        }))
      }

      const handleSubmit=(e)=>{
        e.preventDefault();
        if((inputs.email==="xxxx") && (inputs.password==="9883")){
       
       history('/xxxx9883');
        }
        else{
            alert("admin is not exist");
        }
        
      }

  return (
    <div>

    <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
     
    <div class="container-fluid">
        {/* <a class="navbar-brand" href="#"><img src={emergecare} alt="..."/></a> */}
        <a class="navbar-brand" href="#"> <i class="fa-solid fa-stethoscope"></i></a>
        <a class="navbar-brand" href="#">EmergeCare</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
               
             
                <div>
                    <a class="nav-link active" id='login' href="/login">Login</a>
               </div>
               <div>
                    <a class="nav-link active" id='register' href="/register">Register</a>
               </div>
               <div>
               <a class="nav-link active" id='register' href="/adminlogin">Admin</a>
          </div>
               
            </ul>
            
        </div>
    </div>
</nav>
    </div>
    <form className=" login-container p-4" onSubmit={handleSubmit}>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Email</label>
    <input type="text" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" value={inputs.email} onChange={handleChange} name='email'/>
  </div>
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Password</label>
  <input type="password" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" value={inputs.password} onChange={handleChange} name='password'/>
</div>
<button type="submit" class="btn btn-primary">Login</button>
</form>
    
    </div>
  )
}

export default Adminlogin