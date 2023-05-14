const express = require("express");
const app = express();

// require("dotenv").config({ path: "./.env" });
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//added json middleware
app.use(express.json());

require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

//activated server
app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
