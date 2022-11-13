import StudentModels from "../models/StudentModels"
import handleCRUD from "../utils/handleCRUD"



const createStudent = handleCRUD.createOne(StudentModels);
const getOneStudent = handleCRUD.getOneById(StudentModels);
const getAllStudents = handleCRUD.getAll(StudentModels);
const updateOneStudentById = handleCRUD.updateOneById(StudentModels);
const deleteOneStudentById = handleCRUD.deleteOneById(StudentModels);


export default {createStudent,getOneStudent,getAllStudents,updateOneStudentById,deleteOneStudentById}