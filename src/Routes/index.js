import express from "express"
import userRoute from "./userRoutes"
import ClassRoute from "./ClassRoutes"
import StudentRoute from "./studentRoutes"
import PermissionRoute from "./PermissionRoutes"
import AttendanceRoute from "./AttendanceRoutes"


const app = express();
app.use("/user",userRoute)
app.use("/class",ClassRoute)
app.use("/student",StudentRoute)
app.use("/permission",PermissionRoute)
app.use("/attendance",AttendanceRoute)

export default app;