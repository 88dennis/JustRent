let express = require("express");
let bodyParser = require("body-parser");
let PORT = 3000;
let app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home");
});


app.get("*", function(req, res){
    res.send("PAGE NOT FOUND");
});


app.listen(PORT, function(){
    console.log("http://localhost:" + PORT)
})
