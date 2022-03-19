import React from 'react'
import "../App.css"
const Bookdetails = () => {
  return (
    


    
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
    
    
    <h2 className='text-center h-tag'>Please Fill the Patient Details</h2>
    <div className='details-container '>
    <form className=" pateint-container">
    <div class="mb-3 p-4">
    <label for="exampleInputEmail1" class="form-label">Patient Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3 p-4">
  <label for="exampleInputEmail1" class="form-label">Patient Age</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<div class="mb-3 p-4">
<label for="exampleInputEmail1" class="form-label">Prescribed Docter's Name /if not available write none</label>
<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
</div>
<button type="button" class="btn">Send Patient Details</button>
</form>
</div>
    </div>
  )
}

export default Bookdetails