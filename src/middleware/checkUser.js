import userModel from "../database/models/user.model.js";
import bcrypt from "bcrypt";

export const checkUser = async (req, res, next) => {
  let { email } = req.body;

  let isExist = await userModel.findOne({email});

  if (isExist) {
    res.json({ message: " this userName is already exist" });
  } else {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    next();
  }
};