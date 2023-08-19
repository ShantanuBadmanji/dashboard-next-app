import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  org: {
    type: String,
    required:true,
  },
  score: String,
  start: Date,
  end: Date,
});

export default EducationSchema;
