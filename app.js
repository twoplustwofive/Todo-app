var express = require("express");
var app = express();
var todoController = require("./controllers/todoController");
var connectdb = require("./connection/Connection");
connectdb();

app.set("view engine","ejs");

app.use(express.static('./public'));

todoController(app);

app.listen(process.env.PORT || 5000);
console.log("Server Started!");