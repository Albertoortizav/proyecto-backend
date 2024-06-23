const cors=require("cors")
const express =require("express")
const app = express()
const usersRouter=require("./routes/user.router")
const authRouter=require("./routes/auth.router")
const postRouter =require("./routes/POST.router")
app.use(cors())
app.use(express.json())
app.use("/users",usersRouter)
app.use("/auth",authRouter)
app.use("/posts",postRouter)
app.get((request,response)=>{
    response.json({
        message:"This is my first APIv1"
    })
})
module.exports=app