import express from "express";
import UserController from "../controller/UserController";


const route = express.Router();


route.post("/create",UserController.createUser);
route.get("/oneUser/:id",UserController.getOneUser);
route.get("/getAll",UserController.getAllUser);
route.patch("/updateUser/:id",UserController.updateOneUserById);
route.delete("/deleteUser/:id",UserController.deleteOneUserById);



export default route;
