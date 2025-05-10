const express = require('express')
const app = express()
const path = require('node:path')

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// index

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.get("/",(req, res)=>{
  res.render("index", { title: "Mini Messageboard", messages: messages })
})

// new messages page

app.get("/new",(req, res)=>{
  res.render("new", { title: "Enter a new message for the board!"})
})

// add new message

app.post("/new", (req, res)=>{
  console.log(req.body);

  messages.push({
    text:req.body.text,
    name:req.body.name,
    added:new Date(req.body.date),
  })
  res.redirect("/")
})

app.listen(8000,()=>{
  console.log('express server on http://localhost:8000');
})