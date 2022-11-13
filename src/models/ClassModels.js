import mongoose from "mongoose"

const ClassSchema = new mongoose.Schema(  
    {
      ClassName: {
        type:String,
        
    },

      Mentor: {
        type:String,  
    },
      StartDate: {
          type:String,
         
      },
      EndDate:{
          type:String,
          
      },
      Cohort:{
          type:String,
        
       },
       user:{
        type: mongoose.Schema.ObjectId,
        ref:"UserModels"
       }
       
   },  
   {timestamps: true}

);
  
  ClassSchema.pre(/^find/,function (next) {
    this.populate({
        path:"user",
        select:"firstName lastName role"
    });
    next();
})

const Class = mongoose.model('ClassModels',ClassSchema)

export default Class;