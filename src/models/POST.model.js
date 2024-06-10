const mongoose=require("mongoose")
const colection="Posts"
const schema=new mongoose.Schema({
title:{
type:String,
required:true,
minLength:2,
maxLength:100
},
image:{
    type:String,
    required:true,
    maxLength:10
},
body:{
    type:String,
    required:true,
},
user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
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