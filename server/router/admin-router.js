const express = require('express');
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const deleteUserById = require("../controllers/admin-controller");
const updateUserById = require("../controllers/admin-controller");
const getUserById = require("../controllers/admin-controller");
const deleteContactById = require("../controllers/admin-controller");
const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware,  adminController.getAllUsers);
router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContacts); // Added authMiddleware
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserById);
router.route("/users/:id").get(authMiddleware, adminMiddleware, adminController.getUserById);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, adminController.updateUserById); //patch method is used to apply partial modifications to a resource. 
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteContactById);

module.exports = router;
