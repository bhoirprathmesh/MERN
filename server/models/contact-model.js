const { Schema, model, default: mongoose } = require("mongoose");
// default: mongoose at destructure is not necessary becausewer not going to use it. You can delete that one ok.

const contactSchema = new Schema ({ 
    username: { type: String, required: true }, 
    email: { type: String, required: true },
    message: { type: String, required: true }, 
});

// create the model and collection
const Contact = new model("Contact", contactSchema);

module.exports = Contact;
