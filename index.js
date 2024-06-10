require("dotenv").config()
const server=require("./src/server")
const db=require("./src/lib/db")
const PORT=process.env.PORT || 8080

db.connect().then(()=>{
    console.log("DB connected")
    server.listen(PORT,()=>{
     console.log("Server ready on port 8080")
    })
})
.catch((error)=>{
    console.log("DB connected error",error)
})