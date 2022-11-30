import AttendanceModels from "../models/AttendanceModels";
import handleCRUD from "../utils/handleCRUD";

const createAttendance = handleCRUD.createOne(AttendanceModels);
const getOneAttendance = handleCRUD.getOneById(AttendanceModels);
const getAllAttendance = handleCRUD.getAll(AttendanceModels);
const updateAttendance = handleCRUD.updateOneById(AttendanceModels);
const deleteAttendance = handleCRUD.deleteOneById(AttendanceModels);

const takeManyAttendance = async (req,res)=>{
    // const data  = req.data;

 
    

    const student = Students.map((student)=>{}
    
    )
    await  AttendanceModels.insertMany(student);
    return res.send({message:"Students recorded Successfully!"});
    
    return res.send({message:"New emails Added"});
}
export default {createAttendance,getOneAttendance,getAllAttendance,updateAttendance,deleteAttendance,takeManyAttendance}; 
