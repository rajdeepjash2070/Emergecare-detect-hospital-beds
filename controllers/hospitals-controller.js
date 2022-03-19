const Hospital = require("../models/hospital");

const getAllHospitals = async (req, res, next) => {
  let hospitals;
  try {
    hospitals = await Hospital.find();
  } catch (err) {
    console.log(err);
  }

  if (!hospitals) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ hospitals });
};

const getById = async (req, res, next) => {
    const id = req.params.id;
    let hospital;
    try {
      hospital = await Hospital.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!hospital) {
      return res.status(404).json({ message: "No hospital found" });
    }
    return res.status(200).json({ hospital });
  };



const addhospital = async (req, res, next) => {
    const { name, state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds,contactnumber,adress,available} = req.body;
    let hospital;
    try {
      hospital = new Hospital({
        name,
        state ,
         district,
         emergencymedicinekit,
         oxygencylider,
          description,
           numberofambulance,
           numberoficu,
           ot,
           bloodbank,
           covidbeds,
           denguebeds,
           malariabeds,
           plasmabank,
           numberofbeds,
           contactnumber,
           adress,
        available,
        
      });
      await hospital.save();
    } catch (err) {
      console.log(err);
    }
    if (!hospital) {
      return res.status(500).json({ message: "Unable To Add" });
    }
    return res.status(201).json({ hospital });
  };

  const updatehospital = async (req, res, next) => {
    const id = req.params.id;
    const { name, state , district,emergencymedicinekit,oxygencylider, description, numberofambulance,numberoficu,ot,bloodbank,covidbeds,denguebeds,malariabeds,plasmabank,numberofbeds,contactnumber,adress,available } = req.body;
    let hospital;
    try {
      hospital = await Hospital.findByIdAndUpdate(id, {
        name,
        state ,
         district,
         emergencymedicinekit,
         oxygencylider,
          description,
           numberofambulance,
           numberoficu,
           ot,
           bloodbank,
           covidbeds,
           denguebeds,
           malariabeds,
           plasmabank,
           numberofbeds,
           contactnumber,
           adress,
        available,
      });
      hospital = await hospital.save();
    } catch (err) {
      console.log(err);
    }
    if (!hospital) {
      return res.status(404).json({ message: "Unable To Update By this ID" });
    }
    return res.status(200).json({ hospital });
  };
  
  const deletehospital = async (req, res, next) => {
    const id = req.params.id;
    let hospital;
    try {
      hospital = await Hospital.findByIdAndRemove(id);
    } catch (err) {
      console.log(err);
    }
    if (!hospital) {
      return res.status(404).json({ message: "Unable To Delete By this ID" });
    }
    return res.status(200).json({ message: "Product Successfully Deleted" });
  };





  exports.getAllHospitals = getAllHospitals;
  exports.addhospital = addhospital;
  exports.getById = getById;
  exports.updatehospital = updatehospital;
  exports.deletehospital = deletehospital;



