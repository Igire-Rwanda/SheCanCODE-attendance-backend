import {check,validationResult} from "express-validator";

class Validator{
static validateInput = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const errorMessage = errors.errors.map((err)=>err.msg);
        return res.status(400).json({message:errorMessage});
    }
    return next();
};

static newStudentRules(){
    return [
        check("firstName","Your firstName must be Words").trim().isAlpha(),
        check("lastName","Your lastName must be Words").trim().isAlpha(),
        check("phone","Your Phone number is invalid").trim().isMobilePhone(),
        check("email","Your email is invalid").trim().isEmail(),
        check("password","Your Password is not Strong").trim().isStrongPassword(),
    ];
};
static newUSerRules(){
    return [
        check("firstName","Your firstName must be Words").trim().isAlpha(),
        check("lastName","Your lastName must be Words").trim().isAlpha(),
        check("phone","Your Phone number is invalid").trim().isMobilePhone(),
        check("email","Your email is invalid").trim().isEmail(),
        check("password","Your Password is not Strong").trim().isStrongPassword(),
    ];
};
}
export default Validator;