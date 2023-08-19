import mongoose from "mongoose";
import CertificateSchema from "./schemas/certificate_schema";
import ExperienceSchema from "./schemas/experience_schema";
import EducationSchema from "./schemas/education_schema";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userInfo: {
    name: String,
    role: String,
    imgURL: String,
    email: String,
    phone: Number,
    about: String,
  },
  connections: [String],
  certifications: [CertificateSchema],
  experience: [ExperienceSchema],
  education: [EducationSchema],
  skills: [String],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
