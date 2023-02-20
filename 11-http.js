const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("about history");
  }
  res.end(`  <h1>oopps</h1>
  <p>the page you are searching for cannot be found</p>
  <a href="/">back home</a>`);
});

server.listen(5000);
