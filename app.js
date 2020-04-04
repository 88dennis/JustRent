let express = require("express");
let bodyParser = require("body-parser");
let PORT = 3000;
let app = express();
let rentalObjects = [
    {name:"Generator Set", description: "10KVA", price: 1200, imgSource:"/assets/images/generator.jpg"},
    {name:"Industrial fan", description: "Stand Fan", price: 1900, imgSource:"/assets/images/industrialFan.jpg"},
    {name:"Air cooler", description: "fan coolers", price: 2500, imgSource:"/assets/images/aircooler.jpg"},
    {name:"Jack Hammer", description: "Portable Jackhammer", price: 800, imgSource:"/assets/images/jackhammer.jpg"},
    {name:"Welding Machine", description: "Portable Welding Machine",price: 900, imgSource:"assets/images/weldingmachine.jpg"},
    {name:"Coring Machine", description: "Portable Coring Machine", price: 5000, imgSource:"assets/images/coringmachine.jpg"},
]
// console.log(rentalObjects);

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