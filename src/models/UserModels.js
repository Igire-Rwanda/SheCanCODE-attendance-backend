import mongoose from "mongoose"

const userSchema = new mongoose.Schema(  
    {
      firstName: {
        type:String,
        // required:true,
    },
      lastName:{
        type:String,
        // required:true,
    },
      phone: {
        type:String,
        // required:true,
    },
      email: {
          type:String,
          // required:true,
          unique:true,
      },
      password:{
          type:String,
          // required:true,
      },
      className:{
          type:String,
          // required:true,
       },
       cohort:{
        type:String,
        // required:true,
     },
       role:{
           type:String,
           default:"mentor",
           enum:["Mentor","SuperAdmin"]
       },


   },  
   {timestamps: true}

);

const User = mongoose.model('UserModels',userSchema)

export default User;