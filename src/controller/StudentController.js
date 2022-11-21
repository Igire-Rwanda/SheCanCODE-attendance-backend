import StudentModels from "../models/StudentModels"
import handleCRUD from "../utils/handleCRUD"
import UserModel from '../models/UserModels'
import mailUtil from '../utils/sendmail'



const createStudent = handleCRUD.createOne(StudentModels);
const getOneStudent = handleCRUD.getOneById(StudentModels);
const getAllStudents = handleCRUD.getAll(StudentModels);
const updateOneStudentById = handleCRUD.updateOneById(StudentModels);
const deleteOneStudentById = handleCRUD.deleteOneById(StudentModels);

const importStudents = async (req,res)=>{
        const emails  = req.body.emails.split(",");

        const students = emails.map((email)=>{
            return {email:email,role:"Student",password:"password"};
        })
       
        await  UserModel.insertMany(students);
        console.log(students);

        mailUtil("muhire416@gmail.com","This is testing message");
}




export default {createStudent,getOneStudent,getAllStudents,updateOneStudentById,deleteOneStudentById,importStudents}