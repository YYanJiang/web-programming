const express = require("express");
const app = express();
const static = express.static(__dirname + '/public');
const bodyParser = require("body-parser");
const morgan = require("morgan");

const configRoutes = require("./routes");
const exphbs = require("express-handlebars");

// const Handlebars = require("handlebars");

// const handlebarsInstance = exphbs.create({
//     defaultLayout: "main",
//     // Specify helpers which are only registered on this instance.
//     helpers: {
//       asJSON: (obj, spacing) => {
//         if (typeof spacing === "number")
//           return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
  
//         return new Handlebars.SafeString(JSON.stringify(obj));
//       }
//     }
//   });
  
//   const rewriteUnsupportedBrowserMethods = (req, res, next) => {
//     if (req.body && req.body._method) {
//       req.method = req.body._method;
//       delete req.body._method;
//     }
  
//     // let the next middleware run:
//     next();
//   };
  
// app.use(bodyParser.json());
// app.use(rewriteUnsupportedBrowserMethods);
// app.engine("handlebars", handlebarsInstance.engine);


app.use("/public", static);
app.use(morgan('dev'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: true
}));

configRoutes(app);

app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});






