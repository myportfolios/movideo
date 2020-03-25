// Main starting point of the application
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router"); //import router

//App Setup
// bodyParser and morgan are express middlewares
// A middleware is what incoming request are passed into
/*Tell oue app to use morgan*/
app.use(morgan("combined"));
/*Tell oue app to use body-parser*/
app.use(bodyParser.json({ type: "*/*" }));
router(app); // pass 'app' into router

// Server Setup
/*1. Define a Port that my server is going to run-on on our local machine */
const port = process.env.PORT || 3090;
/*2. create an instance of App above */
const server = http.createServer(
  app
); /*3. create server using http. This server forwards all incoming request to our express instance(app)*/
/*4 Tell server to listen to th ePORT stated step 1 above*/
server.listen(port);
console.log(`Server listening on ${port}`);
