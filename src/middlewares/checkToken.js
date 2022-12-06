// import  jwt  from "jsonwebtoken";

const jwt = require('jsonwebtoken')

const checKToken = (req,res, next)=>{
    try {
        const authorization = req.headers['authorization'];
        if(authorization){
            const tokenvalid = jwt.verify(authorization, "secret");
            req.userId=tokenvalid.id;
            next();
        }else{
            return res.status(401).json({message:"not logged in"})

        }
    } catch (error) {
        return res.status(500 ).json({message:error.message});
        
    }
    
}

module.exports=checKToken;