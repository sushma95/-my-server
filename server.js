const http = require('http')  // require built-in Node.js http package

// Use hosting values if available, otherwise default 
// const hostname = process.env.hostname || '127.0.0.1' // allow remote access
var server_host = process.env.YOUR_HOST || '0.0.0.0';
var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
// const port = process.env.PORT || 3000

// define our server
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write('Hello...\n')
  
  res.end('Hello World! This is a sample node server:)\n')
})

// start listening
// use the server console to tell user where to find the server
// use backticks for template literals with embedded expressions
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://localhost:${port}/`)
// })
server.listen(server_port, server_host, function() {
  console.log('Listening on port %d', server_port);
});

