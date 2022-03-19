import React from 'react'
import { useState } from 'react'
 import Navbar from './Navbar'
 import axios from "axios"
 import { useNavigate } from 'react-router-dom'
 import { Input } from '@material-ui/core'
import "../App.css"
const Register = () => {
  const history=useNavigate();
  const [inputs,setInputs]=useState({
name:"",
email:"",
phonenumber:"",
password:"",
confirmpassword:"",



  });
  //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
  const [checked,setChecked]=useState(false);
  const handleChange=(e)=>{
    setInputs((prevState)=>({
...prevState,
[e.target.name]:e.target.value
    }))
  }
  const sendRequest=async()=>{
    if(inputs.password === inputs.confirmpassword){
    await axios.post("/users",{
      name:String(inputs.name),
      email:String(inputs.email),
      phonenumber:String(inputs.phonenumber),
      password:String(inputs.password),
      confirmpassword:String(inputs.confirmpassword),
     
      
    }).then(res=>res.data);
  }
  else{
    alert('Invalid Input')
  }
  }
  //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs,checked);
   
    sendRequest().then(()=>history('/login'))
    
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
<form className='p-4 login-container needs-validation' onSubmit={handleSubmit}>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Name</label>
     <input type="text" class="form-control" id="exampleInputEmail1  validationCustom01" aria-describedby="emailHelp" value={inputs.name} onChange={handleChange} name='name'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Your Email</label>
     <input type="text" class="form-control" id="exampleInputEmail1 validationCustom01" aria-describedby="emailHelp" value={inputs.email} onChange={handleChange} name='email'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Contact Number</label>
     <input type="text" class="form-control" id="exampleInputEmail1 validationCustom01" aria-describedby="emailHelp" value={inputs.phonenumber} onChange={handleChange} name='phonenumber'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Password</label>
     <input type="password" class="form-control" id="exampleInputEmail1 validationCustom01" aria-describedby="emailHelp" value={inputs.password} onChange={handleChange} name='password'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Confirm Password</label>
     <input type="password" class="form-control" id="exampleInputEmail1 validationCustom01" aria-describedby="emailHelp" value={inputs.confirmpassword} onChange={handleChange} name='confirmpassword'/>
   </div>

  
    
   {/* state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds */}
   
   <button type="submit" class="btn btn-primary">Register</button>
 </form>
        
        

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

export default Register