const http = require('http')
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

const requestListener = (req,res)=>{
  res.setHeader('Content-Type','text/html')
  let file = ""
  switch (req.url){
    case "/":
      file = "/index.html"
      break
    case "/about":
      file = "/about.html"
      break
    case "/contact-me":
      file = "/contact-me.html"
      break
    default:
       file = "/404.html"
       break
  }
  fs.readFile(__dirname + file)
    .then(file=>{
      res.writeHead(200)
      res.end(file)
    })
    .catch(error=>{
      res.writeHead(500)
      res.end(error)
    })
}

const server = http.createServer(requestListener)

server.listen(port, host, ()=>{
  console.log(`Server is running on http://${host}:${port}`);
})
