const express = require('express')
const fs = require('fs').promises
const app = express()

app.get('/',(req,res)=>{
  fs.readFile('index.html')
    .then(data=>{
      res.writeHead(200)
      res.end(data)
    })
    .catch(error=>{
      res.writeHead(500)
      res.end(error)
      return
    })
})

app.get('/about',(req,res)=>{
  fs.readFile('about.html')
    .then(data=>{
      res.writeHead(200)
      res.end(data)
    })
    .catch(error=>{
      res.writeHead(500)
      res.end(error)
      return
    })
})

app.get('/contact-me',(req,res)=>{
  fs.readFile('contact-me.html')
    .then(data=>{
      res.writeHead(200)
      res.end(data)
    })
    .catch(error=>{
      res.writeHead(500)
      res.end(error)
      return
    })
})

// Fallback route for undefined paths
app.use((req, res) => {
  fs.readFile('404.html')
    .then(data => {
      res.writeHead(404)
      res.end(data)
    })
    .catch(error => {
      res.writeHead(500)
      res.end('Internal Server Error')
    })
})

app.listen(8000,()=>{
  console.log(`Express server opened in http://localhost:8000`);
})