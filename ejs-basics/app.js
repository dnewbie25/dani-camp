const express = require('express')
const app = express()
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


// app.js
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

// app.get("/",(req,res)=>{
//   res.render("index", {message: "EJS rocks!"})
// })

app.listen(8000,()=>{
  console.log(`Express server opened in http://localhost:8000`);
})
