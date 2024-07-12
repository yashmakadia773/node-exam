const { userSchema } = require("../model")

// let getUser = ()=>{
//     return userSchema.
// }
let postUser = (body)=>{
    return userSchema.create(body)
}

let deleteuser = (id)=>{
    return userSchema.findByIdAndDelete(id)
}

let updateuser = (id,body)=>{
    return userSchema.findByIdAndUpdate(id,body);
}

let finduserbyemail = (email)=>{
    return userSchema.findOne( {email} )
}
module.exports = {postUser , deleteuser , updateuser,finduserbyemail}