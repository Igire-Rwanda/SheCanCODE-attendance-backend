import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";


dotenv.config ("./.env");
const app=express();
app.use (cors())

app.use(bodyParser.json());



const dbUrl=process.env.DATABASEURL;

mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

const port=process.env.PORT ||4040;

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})

export default app;