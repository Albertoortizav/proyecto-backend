const webToken=require("jsonwebtoken")
const {JWT_SIGN}=process.env

function sign(payload){
    return webToken.sign(payload,JWT_SIGN,{expiresIn:"1h"})
}
function verify(token){
    return webToken.verify(token,JWT_SIGN)
}
module.exports={sign,verify,}