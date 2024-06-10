const bcrypt=require("bcryptjs")
 const SALT_ROUNDS=10

 function encrypt(password){
return bcrypt.hash(password,SALT_ROUNDS)
 }

 function compare(text,hash){
    return bcrypt.compare(text,hash)
 }

 module.exports={encrypt,compare,}