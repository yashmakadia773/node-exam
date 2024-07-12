require("dotenv").config()
let http = require("http");
let express = require("express");
let connectDB = require("./db/dbconnect");
const Routes = require("./routes");
const bodyParser = require("body-parser");
// let viewjs = require("./views")
let app = express();
let cookie = require("cookie-parser")

app.use(cookie())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.set("view-engine", "ejs")
// route
app.use("/v1", Routes)
connectDB()
http.createServer(app).listen(process.env.PORT, () => {
    console.log("server started");
});