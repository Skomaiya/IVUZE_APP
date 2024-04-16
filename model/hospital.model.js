import mongoose from "mongoose";
const hospitalSchema = new mongoose.Schema({
  hospital_name: {
    type: String,
    required: true,
  },
  hospital_type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vendor",
    required: true,
  },
  gallery: [
    {
      image_id: {
        type: String,
        required: true,
      },
      image_url: {
        type: String,
        required: true,
      },
      image_64x: {
        type: String,
        required: true,
      },
    },
  ],
});
const hospital = mongoose.model("hospital", hospitalSchema);
export default hospital;
