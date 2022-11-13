import AttendanceModels from "../models/AttendanceModels";
import handleCRUD from "../utils/handleCRUD";

const createAttendance = handleCRUD.createOne(AttendanceModels);
const getOneAttendance = handleCRUD.getOneById(AttendanceModels);
const getAllAttendance = handleCRUD.getAll(AttendanceModels);
const updateAttendance = handleCRUD.updateOneById(AttendanceModels);
const deleteAttendance = handleCRUD.deleteOneById(AttendanceModels);

export default {createAttendance,getOneAttendance,getAllAttendance,updateAttendance,deleteAttendance};
