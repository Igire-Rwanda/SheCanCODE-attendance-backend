import UserModels from "../models/UserModels"
import handleCRUD from "../utils/handleCRUD"



const createUser = handleCRUD.createOne(UserModels);
const getOneUser = handleCRUD.getOneById(UserModels);
const getAllUser = handleCRUD.getAll(UserModels);
const updateOneUserById = handleCRUD.updateOneById(UserModels);
const deleteOneUserById = handleCRUD.deleteOneById(UserModels);


export default {createUser,getOneUser,getAllUser,updateOneUserById,deleteOneUserById}