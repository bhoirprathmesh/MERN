const express = require('express');
const router = express.Router();
const contactForm = require("../controllers/contact-controller");
const contactSchema = require("../validators/contact-validator");
const validate = require("../middlewares/validate-middleware");

router.route("/contact").post(validate(contactSchema), contactForm);

module.exports = router;