const error =require("http-errors")
const postModel=require("../models/POST.model")
const userModel=require("./users.usecase")
async function create(newPost){
const postFound= await postModel.findOne({title:newPost.title})
if(postFound){
    throw error(409,"Post already exist")
}
const Post=await postModel.create(newPost)
return Post
}
async function update(id,updatedUser){
    const postFound= await postModel.findOne({user:updatedUser.user})
    if(postFound){
      throw error("Yo can´t edit the user")
    }
    const updatePost=await postModel.findByIdAndUpdate(id,updatedUser,{new:true})
    updatePost.updated_at=new Date()
    return updatePost
}
async function deleteById(id,user,search){
if(search!=user){
    throw error(401,"This not yours")
}
const deletePost=await postModel.findByIdAndDelete(id)
return deletePost
}
async function getById(post){
const thePost=await postModel.findById(post)
return thePost
}

async function getAll(){
    const allPosts=await postModel.find()
    return allPosts 
   }

async function find(post){
    const postFound= await postModel.findOne({title:post})
    return postFound
}
module.exports={create,getAll,update,deleteById,getById,find,}