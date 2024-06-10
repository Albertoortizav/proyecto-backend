const error=require("http-errors")
const usersModel=require("../models/users.model")
const jwt=require("../lib/jwt")
const bcrypt=require("../lib/bcrypt")

async function login(email,password){
    const userFound= await usersModel.findOne({email:email})
    if(!userFound){
       throw error(401,"Email doesn´t exist") 
    }
    const userPassword=await bcrypt.compare(password,userFound.password)
    if(!userPassword){
       throw error(401,"Error password") 
    }
    const token= jwt.sign({id:userFound._id})
    return token
}
module.exports={login,}
