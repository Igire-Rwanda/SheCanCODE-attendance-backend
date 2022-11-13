import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "UserModels",
    },
    student: {
      type: mongoose.Schema.ObjectId,
      ref: "StudentsModels",
    },
   
    Duration:{
        type:String,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "declined", "canceled"],
      default: "pending",
    },
    Comment:{
        type:String,
    }
  },
  {
    timestamps: true,
  }
);

attendanceSchema.pre(/^find/,function (next){
    this.populate({
      path:"user",
      select:"firstName lastName phone email role className"
    }).populate({
        path:"student",
      select:"firstName lastName phone email className"

    });
    
    next();
  });

  const Attendance = mongoose.model("Attendance",attendanceSchema);

  export default Attendance;