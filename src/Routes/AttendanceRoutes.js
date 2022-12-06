import express from "express";
import AttendanceController from "../controller/AttendanceController";

const route = express.Router();

route.post("/create",AttendanceController.createAttendance);
route.post("/createMany",AttendanceController.createAttendance);
route.get("/getOneAttendance/:id",AttendanceController.getOneAttendance);
route.get("/getAll",AttendanceController.getAllAttendance);
route.patch("/update/:id",AttendanceController.updateAttendance);
route.delete("/delete/:id",AttendanceController.deleteAttendance);

export default route;