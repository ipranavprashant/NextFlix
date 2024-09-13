import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
