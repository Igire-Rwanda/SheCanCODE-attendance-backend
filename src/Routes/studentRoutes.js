import express from "express";
import StudentController from "../controller/StudentController";


const route = express.Router();


route.post("/create",StudentController.createStudent);
route.get("/oneStudent/:id",StudentController.getOneStudent);
route.get("/getAllStudent",StudentController.getAllStudents);
route.patch("/updateStudent/:id",StudentController.updateOneStudentById);
route.delete("/deleteStudent/:id",StudentController.deleteOneStudentById);

route.post("/import",StudentController.importStudents);



export default route;
