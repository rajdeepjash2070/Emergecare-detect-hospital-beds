 import React from 'react'
 import Navbar from './Navbar'
 import axios from "axios"
 import { useEffect,useState } from 'react';
import "./Home.css"
 import { Link, useNavigate } from 'react-router-dom';
 import hospitalimg from "./hospital.jpg";
 import hospitalhome from "./ambulance.jpg"
 import emergecareicon from "./emergecareicon.png"
 import "./Hospital.css"
 import health from "./health.jpg"
 import { a } from 'react-router-dom';
 import Hospitals from './Hospitals';
import Homehospital from './Homehospital';

 const url="http://localhost:8000/hospitals";

 const fetchHandler= async()=>{

     return await axios.get(url).then((res)=>res.data)

 }
 

 const Home = (props) => {
  

    const [hospitals,setHospitals]=useState();
  const [searchtext,setSearchtext]=useState('')
  const [users,setUser]=useState();
    
    useEffect(() => {
      fetchHandler().then(data=>setHospitals(data.hospitals))
     
     
    },[]);
   
    
//     hospitals.map((hospital,i)=>(
//      
     
// ))
console.log(hospitals);
    console.log(users);


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
     
        <div className='mainimg1'>
       
    <img src={hospitalhome} class="img-fluid rounded mx-auto d-block" alt="Responsive image"/>
  <div className='reglink'>
  <Link to="/login">Login
  </Link>
  <Link to='/register'>
  Register
  </Link></div>
    </div>
   
  
        <form>
        <div class="search-container">
         <input type="text" name="search" placeholder="Search by District or State Available in India" className="search-input" onChange={event=>{setSearchtext(event.target.value)}}/>
        <a href="#" class="search-btn">
                <i class="fas fa-search"></i>      
        </a>
    </div>
    
      </form>
     
      
         <div>
            {hospitals && hospitals.filter((hospital)=>{
              if(setSearchtext===""){
                return `Please search any district `
              }
              else if(hospital.district.toLowerCase().includes(searchtext.toLocaleLowerCase()) || hospital.state.toLowerCase().includes(searchtext.toLocaleLowerCase())){
                // console.log(hospital.district.toLowerCase().includes(searchtext.toLocaleLowerCase()))
              if(hospital.available===true || hospital.numberofbeds!==0){
                  return hospital
              }
              }
              // else if(hospital.state.toLowerCase().includes(searchstate.toLocaleLowerCase()) ){
              //   console.log(hospital.state.toLowerCase().includes(searchstate.toLocaleLowerCase()))
              //      return hospital
              // }
            }).map((hospital,i)=>(
                                   <div key={i}>
                                    
                                    {/* {districtarr[i]}={hospital.district}; 
                                 {console.log(districtarr[i])} */}
                                 <div class="card2 m-3">
  {/* <img src={hospitalimg} class="card-img-top" alt="..."/> */}
  <div className="card2-body">
    <h5 class="title2">Name:{hospital.name}</h5>
    <h6 className='title2'>Number of Beds:{hospital.numberofbeds}</h6>
    <h6 className='title2'>Contact Hospital:{hospital.contactnumber}</h6>
    <h6 className='title2'>Adress:{hospital.adress}</h6>
    <p class="text2">Description: {hospital.description}</p>
    <p class="text2">State:{hospital.state}</p>
    <p class="text2">District:{hospital.district}</p>
    <p class="text2">Emergency medicine kit:{hospital.emergencymedicinekit}</p>
    <p class="text2">Oxygen cylider: {hospital.oxygencylider}</p>
    <p class="text2">Number of ambulance:{hospital.numberofambulance}</p>
    <p class="text2">Number of icu:{hospital.numberoficu}</p>
    <p class="text2">OT:{hospital.ot}</p>
    <p class="text2">Bloodbank:{hospital.bloodbank}</p>
    <p class="text2">Covidbeds:{hospital.covidbeds}</p>
    <p class="text2"> dengue beds:{ hospital.denguebeds}</p>
    <p class="text2">Malaria beds:{hospital.malariabeds}</p>
    <p class="text2">plasmabank:{hospital.plasmabank}</p>
    <a href='/bookdetails'><button type="button" class="btn btn-danger">Book Now</button></a>
   
   
  </div>
</div>
                                     </div>
                                  
            ))}
           




             </div>
                                  
        
            
         </div>
   )
 }

 export default Home