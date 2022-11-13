import PermissionModels from "../models/PermissionModels";
import handleCRUD from "../utils/handleCRUD";

const createPermission = handleCRUD.createOne(PermissionModels);
const getOnePermission = handleCRUD.getOneById(PermissionModels);
const getAllPermission = handleCRUD.getAll(PermissionModels);
const updateOnePermissionById = handleCRUD.updateOneById(PermissionModels);
const deleteOnePermissionById = handleCRUD.deleteOneById(PermissionModels);

export default {createPermission,getOnePermission,getAllPermission,updateOnePermissionById,deleteOnePermissionById};