import mongoose from "mongoose";

const { isEmail } = email;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 9,
  },
  role: {
    type:String,
    values: ["user", "admin"],
    default: "user",
  },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
