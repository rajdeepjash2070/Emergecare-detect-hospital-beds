import React from 'react'
import Navbar from './Navbar'
import axios from "axios"
import { useEffect,useState } from 'react';
import Hospital from './Hospital';
import "./Hospitals.css"
import { Link, useNavigate } from 'react-router-dom';

const url="http://localhost:8000/hospitals";
const fetchHandler= async()=>{

    return await axios.get(url).then((res)=>res.data)

}
const Hospitals = () => {
  const history=useNavigate();
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
 


  return (
    <div>
        <Navbar/>
        
     
        <form>
        <div class="search-container">
         <input type="text" name="search" placeholder="Search by id or Name of your Hospital" className="search-input" onChange={event=>{setSearchtext(event.target.value)}}/>
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
              else if(hospital._id.toLowerCase().includes(searchtext.toLocaleLowerCase()) || hospital.name.toLowerCase().includes(searchtext.toLocaleLowerCase())){
                // console.log(hospital.district.toLowerCase().includes(searchtext.toLocaleLowerCase()))
             return hospital
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
  <h5 className='title2'>ID:{hospital._id}</h5>
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
    <Link to={`/hospitals/${hospital._id}`}><button type="button" class="btn btn-info">Update</button></Link>
    <button type="button" onClick={async()=>{
      await axios
      .delete(`http://localhost:8000/hospitals/${hospital._id}`)
      .then(res=>res.data)
      .then(()=>history("/"))
      .then(()=>history("/xxxx9883"));
    }} class="btn btn-warning m-1">Delete</button>
   
   
  </div>
</div>
                                     </div>
                                  
            ))}
           




             </div>
        
        
        </div>
  )
}

export default Hospitals