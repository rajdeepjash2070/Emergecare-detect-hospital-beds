const express=require("express");
const router=express.Router();
const hospital=require("../models/hospital")
const hospitalsController = require("../controllers/hospitals-controller");

router.get("/", hospitalsController.getAllHospitals);
router.post("/", hospitalsController.addhospital);
router.get("/:id", hospitalsController.getById);
router.put("/:id", hospitalsController.updatehospital);
router.delete("/:id", hospitalsController.deletehospital);


module.exports=router;