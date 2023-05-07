//created app
const dotenv = require("dotenv")
const express = require("express");
const app = express();

//loading configuration
dotenv.config({path:'./.env'})
const PORT = process.env.PORT || 5060;

//added json middleware
app.use(express.json());

require("./config/database").connect();

//route import and mount
// const user = require("./routes/user");
const user = require("../AuthApp/routes/user")
app.use("/api/v1", user);

//activated server
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})