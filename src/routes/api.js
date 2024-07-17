const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.Controller');

router.get('/admins', adminController.getAllAdmins);
router.get('/admins/:id', adminController.getAdminById);
router.post('/admins', adminController.createNewAdmin);
router.put('/admins/:id', adminController.updateAdminById);
router.delete('/admins/:id', adminController.deleteAdminById);

module.exports = router;
