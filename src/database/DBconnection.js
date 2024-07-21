import mongoose from "mongoose";

const connectDB = mongoose
  .connect("mongodb://localhost:27017/") //put the database name after /
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

export default connectDB;
