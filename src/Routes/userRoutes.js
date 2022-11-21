import express from "express";
import UserController from "../controller/UserController";
import {checkUser,loginUser} from "../middlewares/dataChecker"


const route = express.Router();

route.post("/login", UserController.login);
route.get("/login", UserController.login);
route.post("/mentors", UserController.addMentor);
route.post("/create",UserController.createUser);
route.get("/oneUser/:id",UserController.getOneUser);
route.get("/getAll",UserController.getAllUser);
route.patch("/updateUser/:id",UserController.updateOneUserById);
route.delete("/deleteUser/:id",UserController.deleteOneUserById);



export default route;
