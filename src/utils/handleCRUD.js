

 const createOne =(Model) => async (req, res, next) => {
    {
        try {
            const doc =await Model.create(req.body);
            if(!doc){
                return res.status(404).json({message:"failed to register"});
            }
            return res.status(200).json({message:"successfully", data: doc});
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
                return res.status(404).json({message:"failed to register"});
            }
            return res.status(200).json({message:"successfully", data: doc});
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
                return res.status(404).json({message:"failed to register"});
            }
            return res.status(200).json({message:"successfully", data: doc});
            }catch (error){
                console.log(error) 
            }
        }
};

 const updateOneById =(Model) => async (req, res, next) => {
    {
        try {
            const doc =await Model.findByIdAndUpdate(req.params.id);
            if(!doc){
                return res.status(404).json({message:"failed to register"});
            }
            return res.status(200).json({message:"successfully", data: doc});
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
                return res.status(404).json({message:"failed to register"});
            }
            return res.status(200).json({message:"successfully", data: doc});
            }catch (error){
                console.log(error) 
            }
        }
};


 export default {createOne,getAll,getOneById,updateOneById,deleteOneById}
