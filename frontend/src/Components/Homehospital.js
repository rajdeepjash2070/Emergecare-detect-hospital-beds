import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css"

import axios from 'axios';
import hospitalimg from "./hospital.jpg";
import Hospitals from './Hospitals';
const Homehospital = (props) => {
  const history=useNavigate();
    const {_id,name, state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds,contactnumber,adress,available}=props.hospital;

  return (
    <div>

  
<div class="card2 m-3">
  {/* <img src={hospitalimg} class="card-img-top" alt="..."/> */}
  <div class="card2-body">
    <h5 class="title2">Name:{name}</h5>
    <h6 className='title2'>Number of Beds:{numberofbeds}</h6>
    <h6 className='title2'>Contact Hospital:{contactnumber}</h6>
    <h6 className='title2'>Adress:{adress}</h6>
    <p class="text2">Description: {description}</p>
    <p class="text2">State:{state}</p>
    <p class="text2">District:{district}</p>
    <p class="text2">Emergency medicine kit:{emergencymedicinekit}</p>
    <p class="text2">Oxygen cylider: {oxygencylider}</p>
    <p class="text2">Number of ambulance:{numberofambulance}</p>
    <p class="text2">Number of icu:{numberoficu}</p>
    <p class="text2">OT:{ot}</p>
    <p class="text2">Bloodbank:{bloodbank}</p>
    <p class="text2">Covidbeds:{covidbeds}</p>
    <p class="text2"> dengue beds:{ denguebeds}</p>
    <p class="text2">Malaria beds:{malariabeds}</p>
    <p class="text2">plasmabank:{plasmabank}</p>
    
   
   
  </div>
</div>


    </div>
  )
}

export default Homehospital