import express from "express"
import userRoute from "./userRoutes"


const app = express();
app.use("/user",userRoute)

export default app;