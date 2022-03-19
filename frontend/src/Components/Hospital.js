 import Button from '@material-ui/core/Button';
 import { Link, useNavigate } from 'react-router-dom';
 import React from 'react'
 import "./Hospital.css"
 import axios from 'axios';
 import hospitalimg from "./hospital.jpg";
 import Hospitals from './Hospitals';
 const Hospital = (props) => {
   const history=useNavigate();
     const {_id,name, state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds,adress,contactnumber,available}=props.hospital;
 const deleteHandler=async()=>{
   await axios
   .delete(`http://localhost:8000/hospitals/${_id}`)
   .then(res=>res.data)
   .then(()=>history("/"))
   .then(()=>history("/hospitals"));
 }
   return (
   
     <div>
        
         {/* {name}
         {author}
         {description}
         {price}
         <Button>
             Update
         </Button>
         <Button>
             Delete
         </Button>  */}
   
   {/* <img src="..." class="card-img-top" alt="..."/> */}
  

     {/* <Link to={`/books/${_id}`}><button type="button" class="btn btn-info">Update</button></Link>
     <button type="button" onClick={deleteHandler} class="btn btn-warning m-1">Delete</button> */}
    
   <div class="card1 m-3" id='mobilecard'>
   {/* <img src={hospitalimg} class="card-img-top" alt="..."/> */}
   <div class="card1-body">
     <h5 class="title1">Name:{name}</h5>
     <h6 className='title1'>Number of Beds:{numberofbeds}</h6>
     <h6 className='title1'>Contact Hospital:{contactnumber}</h6>
     <h6 className='title1'>Adress:{adress}</h6>
     <p class="text1">Description: {description}</p>
     <p class="text1">State:{state}</p>
     <p class="text1">District:{district}</p>
     <p class="text1">Emergency medicine kit:{emergencymedicinekit}</p>
     <p class="text1">Oxygen cylider: {oxygencylider}</p>
     <p class="text1">Number of ambulance:{numberofambulance}</p>
     <p class="text1">Number of icu:{numberoficu}</p>
     <p class="text1">OT:{ot}</p>
     <p class="text1">Bloodbank:{bloodbank}</p>
     <p class="text1">Covidbeds:{covidbeds}</p>
     <p class="text1"> dengue beds:{ denguebeds}</p>
     <p class="text1">Malaria beds:{malariabeds}</p>
     <p class="text1">plasmabank:{plasmabank}</p>
    
   
     <Link to={`/hospitals/${_id}`}><button type="button" class="btn btn-info">Update</button></Link>
     <button type="button" onClick={deleteHandler} class="btn btn-warning m-1">Delete</button>
   </div>
 </div>

 

 {/* district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds */}

    
     </div> 
   )
 }

 export default Hospital