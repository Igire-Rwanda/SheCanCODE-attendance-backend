import express from "express";
import ClassController from "../controller/ClassController";


const route = express.Router();


route.post("/create",ClassController.createClass);
route.get("/getOneClass/:id",ClassController.getOneClass);
route.get("/getAllClasses",ClassController.getAllClasses);
route.patch("/update/:id",ClassController.updateOneclassById);
route.delete("/delete/:id",ClassController.deleteOneClassById);



export default route;
