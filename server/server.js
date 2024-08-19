const express = require("express");   // we are using express in this application
const app = express();
const router = require("./router/auth-router");

app.use(express.json());
//? This line of code adds Express middleware that parses 
//  incoming request bodies with JSON payloads. It's important to place this before 
//  any routes that need to handle JSON data in the request body. This middleware is 
//  responsible for parsing JSON data from requests, and it should be applied at the 
//  beginning of your middleware stack to ensure it's available for all subsequent 
//  route handlers.

//? Mount the Router: To use the router in your main Express app, you can "mount" 
//  it at a specific URL prefix.
app.use("/api/auth", router);

// to start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is Running at port: ${PORT}`);
});
















// we use it when there is no router avilable

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome To MERN !");
// });

// app.get("/register", (req, res) => {
//     res.status(200).send("Welcome To Registerion Page MERN !");
// });

// app.get("/login", (req, res) => {
//     res.status(200).send("Welcome To Login Page MERN !");
// });