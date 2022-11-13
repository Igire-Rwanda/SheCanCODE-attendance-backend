import express from "express";
import PermissionController from "../controller/PermissionController";

const route = express.Router();

route.post("/create",PermissionController.createPermission);
route.get("/getOnePermission/:id",PermissionController.getOnePermission);
route.get("/getAllPermission",PermissionController.getAllPermission);
route.patch("/update/:id",PermissionController.updateOnePermissionById);
route.delete("/delete/:id",PermissionController.deleteOnePermissionById);

export default route;