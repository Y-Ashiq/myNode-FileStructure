import userModel from "../database/models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";

export const checkUser = async (req, res, next) => {
  let { email } = req.body;

  if (!validator.isEmail(email)) {
    res.status(422).json({ message: "invalid email" });
  } else {
    let isExist = await userModel.findOne({ email });

    if (isExist) {
      res.json({ message: " this userName is already exist" });
    } else {
      req.body.password = bcrypt.hashSync(req.body.password, 8);
      next();
    }
  }
};
