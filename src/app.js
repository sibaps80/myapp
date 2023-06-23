var express = require("express");
const path = require("path");
const jquery = require("jquery");
const ejs = require("ejs");
const app = express();

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const js_path = path.join(__dirname, "../public/js");
const templates_path = path.join(__dirname, "../templates/views" );

app.use(express.json());

//to get the form data
app.use(express.urlencoded({extended: false}));

app.use(express.static(static_path));
app.set("view engine","ejs");
app.set("views", templates_path);

app.get("/", (req, res) => {
    res.render("index",{});
});



app.get("/login", (req, res) => {
    res.render("login",{
        user: "Guest",
    });
});


app.get("/dashboard", (req, res) => {
    res.render("dashboard",{});
});

app.get("/dashboard", (req, res) => {
    res.render("dashboard",{});
});


//Server start up configuration
module.exports = app.listen(port , () => {
    console.log(`Server is started at port no : ${port}`);
})

