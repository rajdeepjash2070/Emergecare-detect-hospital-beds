import React from 'react'
import { useState,useEffect } from 'react'
 import Navbar from './Navbar'
 import axios from "axios"
 import { useNavigate } from 'react-router-dom'

import "../App.css"
 const url2="/users";
 const fetchHandler2= async()=>{

  return await axios.get(url2).then((res)=>res.data)

}



const Login = () => {
    const history=useNavigate();
    const [user,setUser]=useState();
    const [searchtext,setSearchtext]=useState('')
    useEffect(() => {
 
      fetchHandler2().then(data=>setUser(data.user))
     
    },[]);
   // console.log(user)
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
      const sendRequest=async()=>{
       
        await axios.post("/users",{
         
          email:String(inputs.email),
        
          password:String(inputs.password),
       
         
          
        }).then(res=>{alert(res.data.message)
        });
    }

    const checkuser=()=>{
   
    user.filter((userlogin)=>{
      if(userlogin.email.toLowerCase().includes((inputs.email).toLocaleLowerCase()) && userlogin.password.toLowerCase().includes((inputs.password).toLocaleLowerCase())){
      
        return history('/')
       
       
      }
   
    })
    
      }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
       checkuser();
        // sendRequest().then(()=>history('/'))
        
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
<div className='login-div'>
    <form className="login-container" onSubmit={handleSubmit}>
     <div class="mb-3 p-3">
     <label for="exampleInputEmail1" class="form-label" id="validationCustom01">Your Email</label>
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputs.email} onChange={handleChange} name='email'/>
   </div>
   <div class="mb-3 p-3">
   <label for="exampleInputEmail1" class="form-label">Password</label>
   <input type="password" class="form-control" id="exampleInputEmail1 validationCustom01" aria-describedby="emailHelp" value={inputs.password} onChange={handleChange} name='password'/>
 </div>
<button type="submit" class="btn btn-primary">Login</button>
</form>
</div>
<h3 className='text-center p-4'>Don't Have an Account <a href='/register'><button type="submit" class="btn btn-primary">Register</button></a> Here</h3>

<div class="my-5">

  <footer class="text-center text-lg-start">
    <div class="d-flex justify-content-center py-5">
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
        <i class="fab fa-facebook-f"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
        <i class="fab fa-youtube"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
        <i class="fab fa-instagram"></i>
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2" >
        <i class="fab fa-twitter"></i>
      </button>
    </div>

    
    <div class="text-center text-white p-3" >
      © 2022 Copyright:
     
    </div>
    
  </footer>
  
</div>



    </div>
  )
}

export default Login