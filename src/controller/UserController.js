import User from "../models/UserModels"
import handleCRUD from "../utils/handleCRUD"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mailUtil from '../utils/sendmail'
import generator from 'generate-password'



const createUser = handleCRUD.createOne(User);
const getOneUser = handleCRUD.getOneById(User);
const getAllUser = handleCRUD.getAll(User);
const updateOneUserById = handleCRUD.updateOneById(User);
const deleteOneUserById = handleCRUD.deleteOneById(User);

const addMentor = async (req,res)=>{


    var password =generator.generate({
        length:6,
        numbers:true

 });

   
    const addingMentor =  new User({
      
        firstName:req.body.firstName,
         lastName : req.body.lastName,
         email : req.body.email,
         phone:req.body.phone,
         password:bcrypt.hashSync(password,10),
         role:"Mentor"
     })

     
     await addingMentor.save();

     mailUtil(req.body.email,`welcome your password is ${password}`);

    


 return res.send({message:"Mentor Added successfully!", data:addingMentor});

}

const login = async(req, res) =>{
    try {
        const email= req.body.email;
        
        const password= req.body.password;
        const findUser = await User.findOne({email:email});
        if(findUser){
            const isPasswordValid = bcrypt.compareSync(password, findUser.password)
            if(isPasswordValid){
                const token = await jwt.sign({email:findUser.email,role:findUser.role, id:findUser._id},"secret",{expiresIn:"30d"} );
                res.send({message:"Logged In",data:{
                    token:token,
                    email:findUser.email,
                    role: findUser.role
                }});
                
            }else{
                res.status(404).send({message:"Incorrect email or password"});
            }
            
        }else{
            res.status(404).send({message:"Incorrect email or password",data:findUser});
        }
        
    } catch (error) {
        return res.send({message:"Error",data: error.message});
        
    }
}

const getUserProfile =async (req,res) =>{
    const user = await User.findById (req.headers._id);
    if (user) {
        res.json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email
        })
    } else {
        res.status(404).json({
            success: false,
            msg: 'user Not Found'
        })
    }
}
const updateUserProfile =async(req,res)=>{
    const user = await User.findById(req.headers._id,{new:true});
    if(user){
        user.firstName = req.body.firstName || user.firstName;
        user.lastName = req.body.lastName || user.lastName;
        user.email = req.body.email || user.email;

        const updateUser = await User.findOneAndUpdate({_id:req.headers._id},req.body);

        res.json({
            _id: updateUser._id,
            firstName: updateUser.firstName,
            lastName: updateUser.lastName,
            email: updateUser.email
        })
    } else {
        res.status(404).json({
            success: false,
            msg: "User not found"
        });
    }
}



export default {createUser,getOneUser,getAllUser,updateOneUserById,deleteOneUserById,addMentor,login,getUserProfile,updateUserProfile}
