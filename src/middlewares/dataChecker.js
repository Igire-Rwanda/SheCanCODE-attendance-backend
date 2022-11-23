import StudentModel from "../models/StudentModels";
import status from "http-status"
import {hashPassword} from "../utils/hashPassword"

    
  const dataChecker = async (req,res,next)=>{
    let {email } = req.body
    console.log(emails);
  const student = await StudentModel.findOne({email});
  if (!student){
    
    return next();
  }
  return Response.errorMessage(res,"Email Already exist, Try another Email!", status.CONFLICT)
};

export default dataChecker;

