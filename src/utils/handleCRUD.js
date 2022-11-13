

 const createOne =(Model) => async (req, res, next) => {
    {
        try {
            const doc =await Model.create(req.body);
            if(!doc){
                return res.status(404).json({message:"failed to register"});
            }
            return res.status(200).json({message:"Created Successfully ", data: doc});
            }catch (error){
                console.log(error) 
            }
        }
};


 const getOneById =(Model) => async (req, res, next) => {
    {
        try {
            const doc =await Model.findById(req.params.id);
            if(!doc){
                return res.status(404).json({message:"failed "});
            }
            return res.status(200).json({message:"Retrieved Successfully", data: doc});
            }catch (error){
                console.log(error) 
            }
        }
};

 const getAll =(Model) => async (req, res, next) => {
    {
        try {
            const doc =await Model.find(req.query);
            if(!doc){
                return res.status(404).json({message:"failed "});
            }
            return res.status(200).json({message:"Retrieved Successfully", data: doc});
            }catch (error){
                console.log(error) 
            }
        }
};

 const updateOneById =(Model) => async (req, res, _next) => {
    {
        try {
            const doc =await Model.findByIdAndUpdate(req.params.id,req.body,{new:true});
            if(!doc){
                return res.status(404).json({message:"failed to Update"});
            }
            return res.status(200).json({message:"Updated Successfully", data: doc});
            }catch (error){
                console.log(error) 
            }
        }
};

 const deleteOneById =(Model) => async (req, res, next) => {
    {
        try {
            const doc =await Model.findByIdAndDelete(req.params.id);
            if(!doc){
                return res.status(404).json({message:"failed to delete"});
            }
            return res.status(200).json({message:"Deleted Successfully", data: doc});
            }catch (error){
                console.log(error) 
            }
        }
};


 export default {createOne,getAll,getOneById,updateOneById,deleteOneById}
