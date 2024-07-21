import userModel from "../../database/models/user.model.js";

const signUp = async (req, res) => {
  await userModel.insertOne(req.body);

  res.json({ message: "user added successfully" });
};

const signIn = async (req, res) => {
  let { email, password } = req.body;

  let isExist = await userModel
    .find({ email, password })
    .project({ password: 0, email: 0 });

  if (isExist && bcrypt.compareSync(password, isExist.password)) {
    res.json({ message: "welcome" });
  } else {
    res.json({ message: "wrong email or password" });
  }
};

const getSpecificUser = async (req, res) => {
  let user = await userModel.findById(req.params.id);
  res.json(user);
};

const getAllUsers = async (req, res) => {
  let allUsers = await userModel.find();

  res.json(allUsers);
};

const updateUser = async (req, res) => {
  let user = userModel.findByIdAndUpdate(req.params.id, req.body);
  console.log(user);
  res.json({ message: "user updated successfully" });
};

const deleteUser = async (req, res) => {
  let user = userModel.findByIdAndDelete(req.params.id);
  console.log(user);
  res.json({ message: "user deleted successfully" });
};

export default {
  signIn,
  signUp,
  getSpecificUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
