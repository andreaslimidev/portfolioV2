
// --------- IMPORTS ----------
var express = require("express"),
    app = express();



// ---------- ROUTES --------------
var indexRoutes = require("./routes/index")


// --------- CONFIGURE APP --------------
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(indexRoutes);























// --------------------------------------------------------------------------
app.listen(3000, function(){
  console.log("Server startet on PORT 3000");
})
