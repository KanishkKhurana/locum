import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
    maxlength: [13, "Phone number is not valid"],
  },
  address: { type: String },
  state: { type: String },
  city: { type: String },
  zip: { type: Number },
  age: { type: Number },
  gender: { type: String },
  dob: { type: Date},
  regNo: { type: String },
  speciality: { type: String },
  undegradCollege: { type: String },
  undegradCollegeAddress: { type: String },
  postgradCollege: { type: String },
  certifications: { type: String },
 
  experience: { type: Number },
  aadharcardno: { type: String, maxlength: [12, "Aadhar number is not valid"] },
  


});

const Doctor = mongoose.model.Doctor || mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;