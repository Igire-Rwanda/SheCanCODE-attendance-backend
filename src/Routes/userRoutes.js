import express from "express";
import UserController from "../controller/UserController";


const route = express.Router();


route.post("/create",UserController.createUser);
route.get("/getOneUser",UserController.getOneUser);
route.get("/getAll",UserController.getAllUser);
route.patch("/update",UserController.updateOneUserById);
route.delete("/delete",UserController.deleteOneUserById);



export default route;
