const express=require("express")
const router=express.Router()
const user=require("../usecase/users.usecase")

router.post("/",async (request,response)=>{
   try {
      const newUser=await user.create(request.body)
      response.json({
         message:"User created",
         user:{newUser}
      })
   } catch (error) {
      response.status(error.status || 500)
      response.json({
         error:error.message
      })
   }
})
router.get("/:id",async(request,response)=>{
   try {
      const thisUser=await user.getId(request.params.id)
   response.json({
      message:"User: ",
      User:thisUser
   })
   } catch (error) {
      response.status(error.status || 500)
      response.json({
         error:error.message
      })
   }
})

module.exports=router