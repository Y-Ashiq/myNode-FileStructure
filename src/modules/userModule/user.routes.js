import { Router } from "express";

import userControllers from "./user.controller.js";
import { checkUser } from "../../middleware/checkUser.js";

const userRouter = Router();

userRouter.post("/signUp", checkUser, userControllers.signUp);

userRouter.post("/signIn", userControllers.signIn);

userRouter.get("/", userControllers.getAllUsers);

userRouter
  .route("/:id")
  .get(userControllers.getSpecificUser)
  .patch(userControllers.updateUser)
  .delete(userControllers.deleteUser);

export default userRouter;
