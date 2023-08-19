import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  org: {
    type: String,
    required:true,
  },
  role: String,
  duration: Date,
});

export default ExperienceSchema;
