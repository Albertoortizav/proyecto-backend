
const users =require("../models/users.model")
const error=require("http-errors")
const bcrypt=require("../lib/bcrypt")
async function create(newUser){
    const userReady=await users.findOne({email:newUser.email})
    if(userReady){
     throw error(409,"Email already in use")
    }
    const userEncrypt=await bcrypt.encrypt(newUser.password)
    newUser.password=userEncrypt
    const user=await users.create(newUser)
    return user
}

async function getId(id){
    const thisUser= await users.findById(id)
    if(!thisUser){
        throw error(409,"Id user not registed")
    }
    return thisUser

}

async function getById(id){
    const postNewGet=await users.findById(id)
    return postNewGet
}


module.exports={create,getId,getById,}