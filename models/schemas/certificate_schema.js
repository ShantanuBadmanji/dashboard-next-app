import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({
  Context: {
    type: String,
    required:true,
  },
  url: String,
  org: String,
  Details: String,
});
export default CertificateSchema;
