import React from 'react'
import "../App.css"
  import { Link, NavLink } from "react-router-dom";

 import emergecare from "./emergecareicon.png"
const Navbar = () => {
   
  return (
    <div>
 <nav class="navbar navbar-expand-lg navbar-dark">
        
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
                        <a class="nav-link active" aria-current="page" href="/">User Page</a>
                    </li>
                    <li class="nav-item">
                   
                        <a class="nav-link active" href="/xxxx9883">All Hospitals</a>
                    </li>
                   
                    <li class="nav-item">
                        <a class="nav-link active" href="/addhospital">Add Hospitals</a>
                    </li>
                   
                   
                </ul>
                
            </div>
        </div>
    </nav>
    {/* <div className='navbar-bottom'>
<img src={emergecare} alt="..."/>
<h2 id='navbar-quote'>"There are only two sorts of doctors: those who practice with their brains, and those who practice with their tongues." ...
"The aim of medicine is to prevent disease and prolong life, the ideal of medicine is to eliminate the need of a physician."</h2>
</div> */}
    </div>
  )
}

export default Navbar