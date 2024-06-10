const mongoose=require("mongoose")
const colection="User"
const schema=new mongoose.Schema({
name:{
type:String,
required:true,
minLength:2,
maxLength:100
},
profilePic:{
    type:String,
    required:true,
    maxLength:10
},
email:{
    type:String,
    required:true,
    match:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
},
password:{
    type:String,
    minLength:4,
    required:true
},
created_at:{
    type:Date,
    default:Date.now
},
updated_at:{
    type:Date,
    default:Date.now
}

})
module.exports=mongoose.model(colection,schema)