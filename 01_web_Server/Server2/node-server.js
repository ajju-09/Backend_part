const http = require("http");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Its done");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Its a About Section");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Its a Contact Section");
  } else {
    res.statusCode = 400;
    res.setHeader("Content-Type", "text/plain");
    res.end("OOPS ! Something went wrong");
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

