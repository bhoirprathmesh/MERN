// *----------------------
//* Controllers
// *----------------------

//? In an Express.js application, a "controller" refers to a part of your code 
//  that is responsible for handling the application's logic. Controllers are 
//  typically used to process incoming requests, interact with models (data sources), 
//  and send responses back to clients. They help organize your application by 
//  separating concerns and following the MVC (Model-View-Controller) design pattern.

// *----------------------
//* Home Page Logic
// *----------------------
const home = async (req, res) => {
    try{
        res.status(200).send("Welcome To MERN Stack ! So, let Start....");
    } catch (error) {
        console.log(error);
    }
};

// *----------------------
//* Register Logic
// *----------------------
const register = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).json({ message: req.body });
    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
};

// *----------------------
//* Login Logic
// *----------------------
const login = async (req, res) => {
    try {
        res.status(200).send("Welcome To Login Page MERN !");
    } catch (error) {
        res.status(400).send({msg:"Page Not Found !!"});
    }
};

module.exports = { home, register, login };