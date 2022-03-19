const express=require("express");
const useroute=express.Router();
const user=require("../models/user")
const usersController = require("../controllers/users-controller");

useroute.post("/", usersController.adduser);
useroute.post("/", usersController.checkuser);
useroute.get("/",usersController.getAllUsers);
//router.get("/", hospitalsController.getAllHospitals);
// router2.post("/login", usersController.checkuser);
module.exports=useroute;