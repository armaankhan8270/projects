import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./Router/UserRouter.js";
// const url=''
// mongoose.connect(url,()=>console.log('successfully connected to mongodb '))
// mongoose.connection.on('disconnect',()=>console.log("disconnected from mongodb "))
// mongoose.connection.on('connect',()=>console.log("connected To Backend "))

const app = express();
app.use(express.json());
app.use(cors());

app.use((err, req, res, next) => {
  return res.json("something wrong happen" + err);
});
app.use("/user", UserRouter);

app.listen(3001, (req, res) => {
  console.log("server is running on 3001");
});
