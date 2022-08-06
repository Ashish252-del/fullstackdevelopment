// creating webserver by nodejs itself without expressjs
// The http.creatServer() method includes request and response parameter which is supplied by nodejs
// e.g , url, request, header , and data
// the response object can be used to send a response for a current HTTP request
// If the response from the HTTP server is supposed to be displayed as HTML
// you should include an HTTP with correct content type

const http = require('http');
const fs = require('fs');
const { parse } = require('path');
// understand it llike when we write google.com url in browser then the
// response of for this request will be whatever we have send res from here

 const a = fs.readFileSync(`${__dirname}/userapi/userapi.json`, "utf-8")
const b = JSON.parse(a);     
            
const server = http.createServer((req, res) => {
    if (req.url == "/") {
          res.end("Hello from the other side")
     }
   else if (req.url == "/contact") {
          res.end("Hello from the contact side")
     }
    else if (req.url == "/about") {
        // you have to tell our browser that which type data we are using
        // state code 200 for success
        res.writeHead(200, {"content-type":"application/json"})
          res.end("Hello from the about side")
    }
        // reading data from api
        // in browser write localhost:300/userapi
    else if (req.url == "/userapi") {
        res.end(a);
        
     }
    else {
        // we need to tell that is will be error page
        // like url written by user that page doesn't exist
        res.writeHead(404, { "content-type": "text/html" })
        res.end("<h1> 404 error page. page does not found</h1>")
   } 
});

// Localhost is the hostname or the computer that is currently in use to run a program,
//in which the computer has the role as a virtual server.In web development,
//     you can develop a server by editing the code in the localhost and exporting your data to the server.
// The loopback address has a default IP(127.0.0.1) useful to test programs on your computer,
//     without sending information over the internet.This helps when you are testing applications that aren’t ready for the world to see.
// When you call an IP address from your computer,
//     you usually try to contact a different computer over the internet.However,
//      with the loopback address, you are calling the localhost, aka your computer.

// .listen is use to run the server and first parameter is port no
// where server will run and second is local host here IP 127.0.0.1 is equivalent 
// to local host
server.listen(3000, "127.0.0.1", () => {
    console.log("server is running at port no 3000")
});//

// to check the response of the server write in browser
// you can also check these url in postman
// http://localhost:3000/
 //http://localhost:3000/contact
 //http://localhost:3000/about
 //http://localhost:3000/profile