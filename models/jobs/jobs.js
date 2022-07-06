import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  h_id: { type: mongoose.Schema.Types.ObjectId, ref: "Hospital" },
  d_id: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  specialty: { type: String },
  job_date: { type: Date },
  available: { type: String },
  exp: { type: Number },
  pay: { type: Number },
  details: { type: String },
  link: { type: String },
});

module.exports = mongoose.model("Job", JobSchema);
