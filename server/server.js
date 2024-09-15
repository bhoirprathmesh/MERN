require('dotenv').config();
const express = require("express");   // we are using express in this application
const cors = require("cors")
const app = express();
const authRoute = require("./router/auth-router");
const ContactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

//handling cors policy issues
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD",
    credentials: true, 
};

app.use(cors(corsOptions));

app.use(express.json());
//? This line of code adds Express middleware that parses 
//  incoming request bodies with JSON payloads. It's important to place this before 
//  any routes that need to handle JSON data in the request body. This middleware is 
//  responsible for parsing JSON data from requests, and it should be applied at the 
//  beginning of your middleware stack to ensure it's available for all subsequent 
//  route handlers.

//? Mount the Router: To use the router in your main Express app, you can "mount" 
//  it at a specific URL prefix.
app.use("/api/auth", authRoute);
app.use("/api/form", ContactRoute);

app.use(errorMiddleware);

// to start the server
const PORT = 5000;

connectDb().then( () => {
    app.listen(PORT, () => {
        console.log(`Server is Running at port: ${PORT}`);
    });
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