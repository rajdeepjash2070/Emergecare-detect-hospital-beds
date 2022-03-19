import React from "react";
import './App.css';
import { Route,Routes } from 'react-router';
import Hospitals from "./Components/Hospitals";
import AddHospital from "./Components/AddHospital";
import Home from "./Components/Home";
import HospitalDetails from "./Components/HospitalDetails";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Adminlogin from "./Components/Adminlogin";
import Bookdetails from "./Components/Bookdetails";


function App() {
  return (
    <div className="app">

     {/* <h1>This is a basic React app</h1> */}
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/hospitals" element={<Adminlogin/>}/>
       <Route path="/addhospital" element={<AddHospital/>}/>
       <Route path="/hospitals/:id" element={<HospitalDetails/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/adminlogin" element={<Adminlogin/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/bookdetails" element={<Bookdetails/>}/>
       <Route path="/xxxx9883" element={<Hospitals/>}/>
     </Routes>
    </div>
  );
}

export default App;
