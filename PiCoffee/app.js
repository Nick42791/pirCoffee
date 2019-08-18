let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let routes = require("./routes");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/makeCoffee",routes);

app.get("/", function(req,res){
    res.send("Use /makeCoffee");
})
app.listen(3000, console.log("Open!"));