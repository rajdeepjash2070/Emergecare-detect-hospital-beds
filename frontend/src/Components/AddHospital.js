
import React, { useState } from 'react'
 import Navbar from './Navbar'
 import axios from "axios"
 import { useNavigate } from 'react-router-dom'
 import { Input } from '@material-ui/core'
import "./Hospitals.css"
import hospitalhome from "./ambulance.jpg"
 const AddHospital = () => {
   const history=useNavigate();
   const [inputs,setInputs]=useState({
 name:"",
 description:"",
 state:"",
 district:"",
 emergencymedicinekit:"",
 oxygencylider:"",
 description:"",
 numberofambulance:"",
 numberoficu:"",
 ot:"",
 bloodbank:"",
 covidbeds:"",
 denguebeds:"",
 malariabeds:"",
 plasmabank:"",
 numberofbeds:"",
 adress:"",
 contactnumber:"",
 available:false,



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
     await axios.post("/hospitals",{
       name:String(inputs.name),
       state:String(inputs.state),
       district:String(inputs.district),
       emergencymedicinekit:String(inputs.emergencymedicinekit),
       oxygencylider:String(inputs.oxygencylider),
       description:String(inputs.description),
     numberofambulance:String(inputs.numberofambulance),
     numberoficu:String(inputs.numberoficu),
     ot:String(inputs.ot),
     bloodbank:String(inputs.bloodbank),
     covidbeds:String(inputs.covidbeds),
     denguebeds:String(inputs.denguebeds),
     malariabeds:String(inputs.malariabeds),
     plasmabank:String(inputs.plasmabank),
     numberofbeds:String(inputs.numberofbeds),
     adress:String(inputs.adress),
     contactnumber:String(inputs.contactnumber),
       available:Boolean(checked)
     }).then(res=>res.data);
   }
   //state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds
   const handleSubmit=(e)=>{
     e.preventDefault();
     console.log(inputs,checked);
     sendRequest().then(()=>history('/xxxx9883'))
   }
   return (
     <div>
         <Navbar/>
        <h1  className='text-center bg-warning text-white'>Fill the form with Accurate Details of Your Hospital</h1>
        <h3 id='htag' className='text-center bg-danger text-white'>Your Details can Save a Pateint's Life and also Wrong Details can Finish a pateint's Life </h3>

    

         <form className='p-4 form-container' onSubmit={handleSubmit}>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Hospital's Name</label>
     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={inputs.name} onChange={handleChange} name='name'/>
   
  </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">State</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.state} onChange={handleChange} name='state'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">District</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.district} onChange={handleChange} name='district'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Full Adress</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.adress} onChange={handleChange} name='adress'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Contact Number</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.contactnumber} onChange={handleChange} name='contactnumber'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Number of Beds</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.numberofbeds} onChange={handleChange} name='numberofbeds'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label"> Number of Emergency medicine kit</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.emergencymedicinekit} onChange={handleChange} name='emergencymedicinekit'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label"> Oxygen cylider in litres</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.oxygencylider} onChange={handleChange} name='oxygencylider'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Description</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.description} onChange={handleChange} name='description'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Number of Ambulance</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.numberofambulance} onChange={handleChange} name='numberofambulance'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Number of I.C.U</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.numberoficu} onChange={handleChange} name='numberoficu'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Blood Bank</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.bloodbank} onChange={handleChange} name='bloodbank'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Number of O.T</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.ot} onChange={handleChange} name='ot'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Covid beds</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.covidbeds} onChange={handleChange} name='covidbeds'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Dengue beds</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.denguebeds} onChange={handleChange} name='denguebeds'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Malaria Beds</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.malariabeds} onChange={handleChange} name='malariabeds'/>
   </div>
   <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Plasma Bank</label>
     <input type="text" class="form-control" id="exampleInputEmail1" value={inputs.plasmabank} onChange={handleChange} name='plasmabank'/>
   </div>
  
    
   {/* state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds */}
   <div class="mb-3 form-check">
     <input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)} value={inputs.available} class="form-check-input" id="exampleCheck1"/>
     <label class="form-check-label" for="exampleCheck1">Beds Avialable or Not</label>
   </div>
   <button type="submit" class="btn btn-primary">Submit</button>
 </form>
        
      

         </div>
   )
 }

 export default AddHospital