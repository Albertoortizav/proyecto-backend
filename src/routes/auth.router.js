const express=require("express")
const app=express.Router()
const authUseCase= require("../usecase/auth.usecase")
app.post("/login",async (request,response)=>{
    try {
       const {email,password}=request.body
       const token= await authUseCase.login(email,password)
       response.json({
        message:"Token: ",
        token:{token}
       }) 
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error:error.message
        }) 
    }
})
module.exports=app