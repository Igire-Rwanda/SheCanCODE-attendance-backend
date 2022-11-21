import nodemailer from 'nodemailer'

const sendEmail=(receiver,message)=>{

    
let emailtransporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
       user:"winny.ihirwe@gmail.com",
       pass:"raphersigqxqzrzb"
    }
})

let details = {
    from:"winny.ihirwe@gmail.com",
    to:receiver,
    subject:" Attendance ",
    text:message
}
emailtransporter.sendMail(details,  (err) =>{
    if(err){
        console.log("It has an error",err)
    } else{
        console.log("Email sent successfully")
    }
})



}

export default sendEmail;