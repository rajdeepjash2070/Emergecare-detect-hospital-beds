const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  state: {
    type: String,
required: true,
  },
  district: {
    type: String,
required: true,
  },
  emergencymedicinekit: {
    type: String,
required: true,
  },
 oxygencylider: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  numberofambulance: {
type: String,
required: true,
  },
  numberoficu: {
    type: String,
required: true,
  },
  ot: {
    type: String,
required: true,
  },
  bloodbank: {
    type: String,
required: true,
  },
  covidbeds: {
    type: String,
required: true,
  },
  denguebeds: {
    type: String,
required: true,
  },
malariabeds: {
  type: String,
  required: true,
},
plasmabank: {
  type: String,
required: true,
},
  numberofbeds: {
    type: Number,
    required: true,
  },
  contactnumber:{
    type:String,
    required: true,
  },
  adress:{
    type:String,
    required: true,
  },
  available: {
    type: Boolean,
  },
 
  
});

module.exports = mongoose.model("Hospital", hospitalSchema);
