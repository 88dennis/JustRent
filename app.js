let express = require("express");
let bodyParser = require("body-parser");
let PORT = 3000;
let app = express();

let rentalObjects = [
    {name:"Generator Set", description: "10KVA", price: 1200, imgSource:"/images/generator.jpg"},
    {name:"Industrial fan", description: "Stand Fan", price: 1900, imgSource:"https://i.imgur.com/vcqEmRW.jpg"},
    {name:"Air cooler", description: "fan coolers", price: 2500, imgSource:"/images/aircooler.jpg"},
    {name:"Jack Hammer", description: "Portable Jackhammer", price: 800, imgSource:"https://i.imgur.com/SyuUX9F.jpg"},
    {name:"Welding Machine", description: "Portable Welding Machine",price: 900, imgSource:"https://i.imgur.com/EF8eRoG.jpg"},
    {name:"Coring Machine", description: "Portable Coring Machine", price: 5000, imgSource:"/images/coringmachine.jpg"},
];
// console.log(rentalObjects);
console.log(rentalObjects[0]["name"]);

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