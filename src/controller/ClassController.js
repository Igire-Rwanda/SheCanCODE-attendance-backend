import ClassModels from "../models/ClassModels"
import handleCRUD from "../utils/handleCRUD"



const createClass = handleCRUD.createOne(ClassModels);
const getOneClass = handleCRUD.getOneById(ClassModels);
const getAllClasses = handleCRUD.getAll(ClassModels);
const updateOneclassById = handleCRUD.updateOneById(ClassModels);
const deleteOneClassById = handleCRUD.deleteOneById(ClassModels);


export default {createClass,getOneClass,getAllClasses,updateOneclassById,deleteOneClassById}