let express = require("express");
let bodyParser = require("body-parser");
let PORT = 3000;
let app = express();
let rentalObjects = [
    {name:"Generator Set", description: "10KVA", price: 1200, imgSource:""},
    {name:"Industrial fan", description: "Stand Fan", price: 1900, imgSource:""},
    {name:"Air cooler", description: "fan coolers", price: 2500, imgSource:""},
    {name:"Jack Hammer", description: "Portable", price: 800, imgSource:""},
    {name:"Welding Machine", description: "Portable",price: 900, imgSource:""},
    {name:"Coring Machine", description: "Hilti Brand", price: 5000, imgSource:""},
]
console.log(rentalObjects);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("landingPage");
});

app.get("/forRentItems", function(req, res){
    res.render("viewRentalsPage", {rentalObjectsEjs: rentalObjects})
});

app.get("*", function(req, res){
    res.send("PAGE NOT FOUND");
});

app.listen(PORT, function(){
    console.log("Connected to http://localhost:" + PORT)
});
