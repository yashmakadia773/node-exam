let jwt = require("jsonwebtoken");

let createToken = (data)=>{
    return jwt.sign({data}, process.env.SECRET)
}

let isLogin = ([...role])=>{
    try{
        return(req, res, next)=>{
            console.log(role);
            let token =  req.cookies["token"];
            console.log(token ,"auth");
            if (!token){
                throw  new Error(" you are not log in ")
            }
            let data = jwt.verify(token , process.env.SECRET);
            console.log(data);
            req.user = data
            next()
        }   

    }catch(Err){
        res.status(500).json({error : err.massage})
    }
}
module.exports= {  createToken , isLogin }  