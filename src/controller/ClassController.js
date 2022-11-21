import ClassModels from "../models/ClassModels"
import handleCRUD from "../utils/handleCRUD"



const createClass = handleCRUD.createOne(ClassModels);
const getOneClass = handleCRUD.getOneById(ClassModels);
const getAllClasses = handleCRUD.getAll(ClassModels);
const updateOneclassById = handleCRUD.updateOneById(ClassModels);
const deleteOneClassById = handleCRUD.deleteOneById(ClassModels);

const addClass = (req,res)=>{

    
    const addNewClass = new ClassModels({
        ClassName: req.body.name,
        Cohort: req.body.cohort,
        
    });

    addNewClass.save(); 
    return res.send({
        message:"Class added successfully"
    })
  
  }



export default {createClass,getOneClass,getAllClasses,updateOneclassById,deleteOneClassById,addClass}