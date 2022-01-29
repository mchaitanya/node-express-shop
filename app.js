const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<html>");
  res.write("<head><title>My App</title></head>");
  res.write("<body><h1>Hello, world</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
