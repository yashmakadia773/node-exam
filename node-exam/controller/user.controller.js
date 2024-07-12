const { createToken } = require("../middleware/auth");
const { userService } = require("../services");

let getuser = (req, res) => {
    console.log("asddhdb");
    res.status(200).json({
        message: "user data add",

    })
}

let postUser = async (req, res) => {
    console.log(req.body  ,"post user ");
    let body = req.body

    let result = await userService.postUser(body)
    res.status(201).json({
        message: "post data added",
        result
    })

}

let deletUser = async (req, res) => {
    let { id } = req.params
    let user = await userService.deleteuser(id)
    res.status(200).json({
        message: " data was deleted",
        user
    })
}

let updateUser = async (req, res) => {
    let body = req.body;
    let { id } = req.params;

    let result = await userService.updateuser(id, body)
    res.status(200).json({
        message: " update data secessfully",
        result
    })
}

let login = async (req, res) => {
    try {
        // console.log(req.body,"login");
        let { email, pass } = req.body

        let user = await userService.finduserbyemail(email);
        // let result = await userService.finduserbyemail({email});
        console.log(user ," controller");

        if (!user) {
            throw new Error(" user not found");
        }
        if (user.pass !== pass) {
            throw new Error(" password invalid");
        }

        let token = createToken(user);
        res.cookie("token", token);
        console.log(token );
        res.status(200).json({
            message: " login successfully"
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}
module.exports = { getuser, postUser, deletUser, updateUser, login } 