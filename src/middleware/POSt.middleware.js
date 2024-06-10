const error=require("http-errors")
const postUseCase=require("../usecase/users.usecase")
const jwt=require("../lib/jwt")

 async function auth(request,response,next){
try {
   const token=request.headers.authorization
    if(!token){
        throw  error(401,"Token required")
      }
      const payload=jwt.verify(token)
   const user= await postUseCase.getById(payload.id)
   request.user=user
 
   next() 
} catch (error) {
    response.status(error.status || 500)
      response.json({
         error:error.message
      })
}
}
module.exports=auth
