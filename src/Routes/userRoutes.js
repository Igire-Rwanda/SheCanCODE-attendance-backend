import express from "express";
import UserController from "../controller/UserController";
import {checkUser,loginUser} from "../middlewares/dataChecker"


const route = express.Router();

route.post("/login",loginUser);

route.post("/create",checkUser,UserController.createUser);
route.get("/oneUser/:id",UserController.getOneUser);
route.get("/getAll",UserController.getAllUser);
route.patch("/updateUser/:id",UserController.updateOneUserById);
route.delete("/deleteUser/:id",UserController.deleteOneUserById);



export default route;
