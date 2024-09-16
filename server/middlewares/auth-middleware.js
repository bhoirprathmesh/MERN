const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) { 
        // If you attempt to use an expired token, you'll receive a "401 Unauthorized HTTP response.
        return res 
        .status(401)
        .json({ message: "Unauthorized HTTP, Token not provided"});
    }

    // console.log("token from auth middleware", token);  --> only for the checking purpose
    // Assuming token is in the format "Bearer <jwtToken>, Removing the "Bearer" prefix"

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token from auth middleware", jwtToken);

    try{
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRECT_KEY);
        // console.log(isVerified);  --> get data which is pass during the payload for jwt sign in user-model.js

        const userData = await User.findOne({ email: isVerified.email })
        .select({ 
            password: 0,
        });
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        //? In Express.js, req (request) object is an object that contains information 
        //  about the HTTP request. By adding custom properties to req, you can 
        //  pass information between middleware functions or make it available
        // in your route handlers.

        next();
    }catch(error) {
        return res.status(401).json({ message: "Unauthorized. Invaid token." });
    }

    next();
};

module.exports = authMiddleware;