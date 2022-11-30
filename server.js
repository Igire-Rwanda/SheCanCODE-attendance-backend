import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";
import route from "./src/Routes/index"
import User from "./src/models/UserModels";
import bcrypt from 'bcrypt';

dotenv.config ();
const app=express();
const nodemailer = require("nodemailer");
let mailtransporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
       user:"rinidegol08@gmail.com",
       pass:"mounir&88"
    }
})

let details = {
    from:"rinidegol08@gmail.com",
    to:"winniedisc@gmail.com",
    subject:" Attendance ",
    text:" Your Attendance has been approved!"
}
mailtransporter.sendEmail=(details,(err) => {
    if(err){
        console.log("It has an error",err)
    } else{
        console.log("Email sent successfully")
    }
})

app.use (cors())

app.use(bodyParser.json());

app.use("/v1/attendance",route);

const dbUrl=process.env.DATABASEURL;



const createSuperAdmin = async()=>{

  const findUser = await User.findOne({email:process.env.email});
  if(!findUser){
    const admin =  new User({
     email:process.env.EMAIL ,
    //  password:bcrypt.hashSync(process.env.PASSWORD,10),
     role:"SuperAdmin" 
  })
  admin.save();

}
}

    
mongoose.connect(dbUrl).then(()=>{
    console.log("Database connected successfully");
    createSuperAdmin()
    
   
});

const port=process.env.PORT ||4040;

app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})

export default app;

