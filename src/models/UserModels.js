import mongoose from "mongoose"
import express from "express";



const userSchema = new mongoose.Schema(  
    {
    firstName: {
      type:String,
   
  },
      lastName:{
        type:String,
        
    },
      phone: {
        type:String,
        
    },
      email: {
          type:String,
      },
      password:{
          type:String,
         
      },

      className:{
          type:String,
          default:"NetBrain"
       },
       cohort:{
        type:String,
        default:"7"
     },
       role:{
           type:String,
           default:"Mentor",
           enum:["SuperAdmin","Mentor","Student"]
       },
      
      status:{
          type:String,
          enum:["null","Activate","Desactivate"],
          default:"null"
      }
   },
      {
          timestamps: true,  
      }
);

const User = mongoose.model('Users',userSchema)

export default User;