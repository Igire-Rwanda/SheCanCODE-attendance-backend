import express from "express";
import UserController from "../controller/UserController";
import { checkUser,loginUser} from "../middlewares/CheckUser"
// import getUserProfile from "../controller/UserController";
// import VerifyAccess from "../middlewares/verifyAccess";




const route = express.Router();

// route.post("/login",UserController.login);
// route.get("/login", UserController.login);
route.post("/login",loginUser);

route.post("/mentors", UserController.addMentor);
route.post("/create",checkUser,UserController.createUser);
route.get("/oneUser/:id",UserController.getOneUser);
route.get("/getAll",UserController.getAllUser);
route.patch("/updateUser/:id",UserController.updateOneUserById);
route.delete("/deleteUser/:id",UserController.deleteOneUserById);
route.get("/profile", UserController.getUserProfile);



export default route;
