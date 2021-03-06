let express = require("express");
let bodyParser = require("body-parser");
let PORT = 3000;
let app = express();

let rentalObjects = [
    { name: "Generator Set", description: "10KVA", price: 1200, imgSource: "/images/generator.jpg" },
    { name: "Industrial fan", description: "Stand Fan", price: 1900, imgSource: "https://i.imgur.com/vcqEmRW.jpg" },
    { name: "Air cooler", description: "fan coolers", price: 2500, imgSource: "/images/aircooler.jpg" },
    { name: "Jack Hammer", description: "Portable Jackhammer", price: 800, imgSource: "https://i.imgur.com/SyuUX9F.jpg" },
    { name: "Welding Machine", description: "Portable Welding Machine", price: 900, imgSource: "https://i.imgur.com/EF8eRoG.jpg" },
    { name: "Coring Machine", description: "Portable Coring Machine", price: 5000, imgSource: "/images/coringmachine.jpg" },
];
// console.log(rentalObjects);
console.log(rentalObjects[0]["name"]);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

//Route for the landingPage.ejs
app.get("/", function (req, res) {
    res.render("landingPage");
});

//Route for the viewRentalsPage.ejs - where the items are displayed
app.get("/forRentItems", function (req, res) {
    console.log("*******************************");
    console.log(rentalObjects);
    res.render("viewRentalsPage", { rentalObjectsEjs: rentalObjects })
});

//Route for the Page new.ejs - where you add new items
app.get("/forRentItems/new", function (req, res) {

    res.render("new");
});

//Route for the FORM action, METHOD POST - getting the body from a FORM and redirects to the forRentItems route showing the viewRentals.ejs
app.post("/forRentItems", function (req, res) {
    //get data from form
    //rest route meaning same name as the get route
    //the form action will activate this route then send a body
    //the body is the object which will have a key pertaining to name you indicated on the form
    //the form from the landing page will send a body 
    console.log(req);
    //to view the req.body you need to install the nmp i body-parser and use it; no body parser, no req.body

    console.log(req.body);
    let newPost = req.body;

    let newObject = {
        name: newPost.name,
        description: newPost.description,
        price: Number(newPost.price),
        imgSource: newPost.imgSource
    };

    console.log("---------------------");
    console.log(newObject);
    rentalObjects.push(newObject);
    console.log("POST ROUTE");
    //redirects you to the getroute
    res.redirect("/forRentItems");
});

// app.get("*", function (req, res) {
//     res.send("PAGE NOT asd");
// });

app.listen(PORT, function () {
    console.log("Connected to http://localhost:" + PORT)
});


// function thousands_separators(num)
//   {
//     var num_parts = num.toString().split(".");
//     num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return num_parts.join(".");
//   }

// console.log(thousands_separators(1000));
// console.log(thousands_separators(10000.23));
// console.log(thousands_separators(100000));


//----------------- GOOD

// var number = 987654321;
// number.toLocaleString(); // "987,654,321"
// // A more complex example: 
// var number2 = 9876.54321; // floating point example
// number2.toLocaleString(undefined, {
// 	maximumFractionDigits: 2
// }); // "9,876.54"

//----------------

// var nf = new Intl.NumberFormat();
// nf.format(number); // "1,234,567,890"