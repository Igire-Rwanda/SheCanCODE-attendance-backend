import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";
import route from "./src/Routes/index"
import User from "./src/models/UserModels";
import bcrypt, { hashSync } from 'bcrypt';



dotenv.config ();
const app=express();
app.use (cors())

app.use(bodyParser.json());

app.use("/v1/attendance",route);


const dbUrl=process.env.DATABASEURL;

const hashedPassword =bcrypt.hashSync(process.env.password,10);
const createSuperAdmin = async()=>{
    const admin =  new User({
     email:process.env.EMAIL ,
     password:hashedPassword,
     role:"SuperAdmin"
     
  })
//   userSchema.path('email').validate(async (email)=>{
//     const emailCount = await mongoose.models.Users.countDocuments({ email })
//     return !emailCount
//   },'email used')

  

admin.save();
 
 }
    




mongoose.connect(dbUrl).then(()=>{
    console.log("Database connected successfully");
    createSuperAdmin()
});


const port=process.env.PORT ||4000;

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})

export default app;