// const http = require('http');
// const url = require('url');

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const path = parsedUrl.pathname;
//   const method = req.method;

//   // Normalize the path (optional)
//   const route = `${method}:${path}`;

//   switch (route) {
//     case 'GET:/':
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end('Hello! This is a GET request.');
//       break;

//     case 'GET:/greet':
//       const name = parsedUrl.query.name || 'Guest';
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(`Hello, ${name}!`);
//       break;

//     default:
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       res.end('404 Not Found');
//       break;
//   }
// });

// [2025-09-10T09:00:00.123Z] GET /
// [2025-09-10T09:01:02.456Z] GET /greet {"name":"John"}
// [2025-09-10T09:01:55.789Z] GET /notfound


// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
// const http = require('http');

// const server = http.createServer((req, res) => {

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');


//   res.end('Hello, HTTP in Node.js!');
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });


// const http = require("http")

// const server = http.createServer((req,res) =>{
//   console.log("started")
//   res.end("hlo from server")
// })

// server.listen(3000, ()=> console.log("server start"))






// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("new request")
//   res.end("hello from server")
// })

// server.listen(4000,()=> console.log("server started"))

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const log = `${Date.now()}: ${req.method} ${req.url} New req received\n`;

//   fs.appendFile("log.txt", log, (err) => {
//     if (err) {
//       res.writeHead(500);
//       return res.end("Server Error");
//     }
//     switch (req.method) {
//       case "GET":
//         switch (req.url) {
//           case "/":
//             res.end("GET: homepage");
//             break;
//           case "/about":
//             res.end("GET: yourself");
//             break;
//           default:
//             res.end("GET: 404 not found");
//         }
//         break;

//       }  
//   });
// });

// server.listen(3000, () => console.log("server start"));

// const arr =[];

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello express')
// });

// app.get('/about', (req, res) => {
//   res.send('Welcome to Page');
// });

// app.get('/contact', (req, res) => {
//   res.send('Contact Page');
// });

// app.listen(port, () => {
//   console.log(`Server stared`)
// });

console.log(process)