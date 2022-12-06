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
          type:Date,
          default:Date.now,
         
      },
      EndDate:{
          type:Date,
          default:Date.now,
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

const Class = mongoose.model('Class',ClassSchema)

export default Class;