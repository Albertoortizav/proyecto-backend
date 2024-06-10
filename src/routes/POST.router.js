const express=require("express")
const app=express.Router()
const postUseCase=require("../usecase/POST.usecase")
const auth=require("../middleware/POSt.middleware")
const jwt=require("../lib/jwt")
const userUseCase=require("../usecase/users.usecase")
app.post("/",auth,async (request,response)=>{
 try {
       request.body.user=request.user
    const postNew=await postUseCase.create(request.body)
    response.json({
        message:"Post created",
        Post: postNew
    })
 } catch (error) {
    response.status(error.status || 500)
      response.json({
         error:error.message
      })
 }
})
app.patch("/:id",auth,async (request,response)=>{
    try {
        const postUpdate= await postUseCase.update(request.params.id,request.body)
        response.json({
            message:"Post updated",
            Post: postUpdate
        })
    } catch (error) {
        response.status(error.status || 500)
      response.json({
         error:error.message
      })
    }

})
app.delete("/:id",auth,async(request,response)=>{
try {
    const payload=await jwt.verify(request.headers.authorization)
    const user=payload.id
    const search=await postUseCase.getById(request.params.id)
    const userthis=search.user
    const postDelete=await postUseCase.deleteById(request.params.id,user,userthis)
    response.json({
        message:"Post deleted",
        Post:postDelete
    })
} catch (error) {
    response.status(error.status || 500)
    response.json({
       error:error.message
    })
}
})
app.get("/",async (request,response)=>{
  try{ 
    const looking=request.query.search
    if(!looking){
        const all= await postUseCase.getAll()
        response.json({
           message:"Posts: ",
           Post:all
        })
   
    }
    else{
        const only=await postUseCase.find(looking)
        response.json({
            message:"User",
            user:only
        })
    }
  }catch(error){
    response.status(error.status || 500)
    response.json({
       error:error.message
    })
  }
  

  app.get("/",async (request,response)=>{
    try{
       const all= await postUseCase.getAll()
       response.json({
          message:"Posts: ",
          Post:all 
       })
  
    }catch(error){
      response.status(error.status || 500)
      response.json({
         error:error.message
      })
    }
    })
 
    
})

module.exports=app