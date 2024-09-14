//-----------------
//* express.Router
//-----------------

//? In Express.js, express. Router() is a mini Express application without all the server 
//  configurations but with the ability to define routes, middleware, and even have its own set of 
//  route handlers. It allows you to modularize your routes and middleware to keep your code 
//  organized and maintainable.

//* https://expressjs.com/en/guide/routing.html

//? Use the express.Router class to create modular, mountable route handlers. A Router instance 
//  is a complete middleware and routing system; for this reason, it is often referred to as a 
//  "mini-app".



const express = require('express');
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");
// {home, register, login} intsead of this we use authcontroller
const { signupSchema, signinSchema} = require("../validators/auth-validator");
const validate = require('../middlewares/validate-middleware');

router.route('/').get(authcontroller.home);
router.route('/register').post(validate(signupSchema), authcontroller.register);
router.route('/login').post(validate(signinSchema), authcontroller.login);

module.exports = router;









// M-1 :
// router.get("/", (req, res) => {
//     res.status(200).send("Welcome To MERN Stack ! So, let Start....");
// });

// M-2 : (better)
// router.route("/").get((req, res) => {
//     res.status(200).send("Welcome To MERN Stack ! So, let Start....");
// });

// router.route("/register").get((req, res) => {
//     res.status(200).send("Welcome To Registerion Page MERN !");
// });

// router.route("/login").get((req, res) => {
//     res.status(200).send("Welcome To Login Page MERN !");
// });