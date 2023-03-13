const express = require("express");
const app = express();
const port = 3000;

const cacheService = require("./src/cacheService");
const controller = require("./src/userController");

app.get("/alive", (req, res) => res.status(200).send("Hey, I'm Alive!"));

// Send req in format http://localhost:3000/user/user@gmail.com
app.get("/user/:email", controller.getUserDetails);

// Setup cache adds in some dummy data
cacheService.setupCache();

app.listen(port, () => console.log(`Cache app listening on port ${port}!`));

module.exports = { app };
