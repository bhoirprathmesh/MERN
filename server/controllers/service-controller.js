const Service = require("../models/service-model");

// *----------------------
//* Services Logic
// *----------------------
const services = async (req, res) => {
    try {
        const response = await Service.find();
        if(!response) {
            // handle the case where no document was found
            res.status(404).json({msg: 'Service not found'});
            return;
        }
        res.status(200).json({ msg: response});
    } catch (error) {
        console.log(`Service error: ${error}`);
    }
};

module.exports = services;