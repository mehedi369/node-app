let express = require("express");
let bodyParser = require("body-parser");
let app = express();
// for parsing name from the body
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let friends = ["Rahim", "Karim", "Jabbar", "Noru", "Kashem"];

app.get("/", (req, res)=>{
  res.render("home");
});

app.post("/addfriend", (req, res)=>{
  // parse new friend from the form input and store it on the newfriend variable
  let newfriend = req.body.newfriend;
  friends.push(newfriend);
  // res.send("You have reached the post route.");
  res.redirect("/friends");
});

app.get("/friends", (req, res)=>{
  // let friends = ["Rahim", "Karim", "Jabbar", "Noru", "Kashem"];
  res.render("friends", {friends : friends});
});

app.listen(3000, ()=>{
  console.log("Boss! Server is running on port: 3000");
});
