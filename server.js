import express from "express";
import connectDB from "./src/database/DBconnection.js";
import userRouter from "./src/modules/userModule/user.routes.js";

const app = express();
const port = 3000;

app.use(express.json());

connectDB;
app.use("/api/user", userRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
