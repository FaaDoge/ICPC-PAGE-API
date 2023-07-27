// rolesRoutes.js
const express = require('express');
const rolesController = require('../controllers/rolesController');

const router = express.Router();

router.get('/roles', rolesController.getAllRoles);
router.get('/roles/:role_id', rolesController.getRoleById);
router.post('/roles', rolesController.addRole);
router.put('/roles/:role_id', rolesController.updateRole);
router.delete('/roles/:role_id', rolesController.deleteRole);

module.exports = router;
