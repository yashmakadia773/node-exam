let express = require("express");
const { userController } = require("../controller");
const { login } = require("../controller/user.controller");
const { isLogin } = require("../middleware/auth");
let route = express.Router()
// get user
route.get("/get", isLogin(["admin","user"]),  userController.getuser);

// post user 
route.post("/post",  userController.postUser);

// delete user
route.delete("/delet/:id" ,userController.deletUser);

// update user 
route.put("/update/:id" , userController.updateUser);

// login
route.post("/login",  userController.login);
module.exports = route