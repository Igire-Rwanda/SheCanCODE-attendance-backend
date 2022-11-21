import mongoose from "mongoose"

const studentSchema = new mongoose.Schema(  
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
      
   },
      {
          timestamps: true,  
      }
);

const Student = mongoose.model('Students',studentSchema)

export default Student;