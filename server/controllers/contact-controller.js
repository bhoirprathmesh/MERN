const Contact = require("../models/contact-model");

// *----------------------
//* Contact Form  Logic
// *----------------------
const contactForm = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({ message: "Message Send Successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Message Not Delivered" });
    }
};

module.exports = contactForm;