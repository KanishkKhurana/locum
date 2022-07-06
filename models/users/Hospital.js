import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  phone: { type: Number },
  email: { type: String },
  state: { type: String },
  city: { type: String },
  zip: { type: Number },
  website: { type: String },
  regno: { type: String },
  password: { type: String },
});


module.exports = mongoose.model("Hospital", HospitalSchema);