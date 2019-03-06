const express = require("express");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const app = express();
const users = require("./users")

var currentUser = "";
app.use(bodyParser.json());
app.use(cookie());
app.use(bodyParser.urlencoded({extended:true}));

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  if(req.cookies.AuthCookie){
    //res.sendFile(path.resolve("public/login.html"))
  }
  res.sendFile(path.resolve("public/login.html"))
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  // if(!username ||!typeof username !== "string"){
  if(username === ""){
    res.sendFile(path.resolve("public/loginError.html"))
  }
  else { 
    currentUser = username;
    const pash = users.getPash(username).hashedPassword;
    bcrypt.compare(req.body.password, pash, function(err, result) {
      if(!result){
        res.sendFile(path.resolve("public/loginError.html"))
      }
      else {
        res.cookie("AuthCookie", username);
        res.redirect('/private');
      }
    });
  }
});

app.use("/private", (req, res, next)=>{
  if(!(req.cookies.AuthCookie)){
    res.status(403).send("Unauthorized");
    res.redirect("/");
  }
  next();
})

app.get("/login", (req,res) =>{
  res.sendFile(path.resolve("public/login.html"))
})

app.get("/logout", (req,res) => {
  res.clearCookie("AuthCookie");
  currentUser =="";
  res.sendFile(path.resolve("public/logout.html"));
});

app.get("/private", (req,res) => {
  res.render('private',{
    username: currentUser,
    id : users.getPash(currentUser)._id ,
    firstName:  users.getPash(currentUser).firstName,
    lastName: users.getPash(currentUser).lastName,
    profession: users.getPash(currentUser).profession,
    bio: users.getPash(currentUser).bio
  })
});

app.listen(3000, function() {
    console.log("Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it");
    if (process && process.send) process.send({done: true}); 
});
