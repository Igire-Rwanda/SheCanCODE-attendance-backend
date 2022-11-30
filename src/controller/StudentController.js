import StudentModels from "../models/StudentModels"
import handleCRUD from "../utils/handleCRUD"
import UserModel from '../models/UserModels'
import mailUtil from '../utils/sendmail'
import bcrypt from "bcrypt"
import generator from 'generate-password'


const createStudent = handleCRUD.createOne(StudentModels);
const getOneStudent = handleCRUD.getOneById(StudentModels);
const getAllStudents = handleCRUD.getAll(StudentModels);
const updateOneStudentById = handleCRUD.updateOneById(StudentModels);
const deleteOneStudentById = handleCRUD.deleteOneById(StudentModels);


const importStudents = async (req,res)=>{
        const emails  = req.emails;

     
        

        const students = emails.map((email)=>{
            var password =generator.generate({
                length:10,
                numbers:true
            
            });
            let hashedPassword=bcrypt.hashSync(password,10);
            mailUtil(email,`Welcome!!your password for SheCanCODE attendance is ${password}`);
            return {
                email:email,
                role:"Student",
                password:hashedPassword};
        }
        
        )
        await  UserModel.insertMany(students);
        return res.send({message:"Students Added!"});
        
        return res.send({message:"New emails Added"});
}





export default {createStudent,getOneStudent,getAllStudents,updateOneStudentById,deleteOneStudentById,importStudents}