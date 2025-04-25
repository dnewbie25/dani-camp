const http = require('http')
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Handles an HTTP request and response.
 * Reads the file associated with the current URL (or 404.html if none is found)
 * and sends it as the response.
 * @param {http.IncomingMessage} req - The incoming http request
 * @param {http.ServerResponse} res - The server response
 */
/*******  a7e65abe-6428-4e1b-b020-ce35da864b9b  *******/
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
