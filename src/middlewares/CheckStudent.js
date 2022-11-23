import UserModel from "../models/UserModels";
import status from "http-status"


    
  const studentChecker = async (req,res,next)=>{
    
    const emails  = req.body.emails.split(",");

  const Emails = (await UserModel.find({},{email: 1},{emails})).map(user=>user.email);
   const allEmails = emails.filter(newEmail=>{
    return !Emails.find((email)=>email==newEmail);
   })
   req.emails=allEmails;
   next();
  };



export default studentChecker;

