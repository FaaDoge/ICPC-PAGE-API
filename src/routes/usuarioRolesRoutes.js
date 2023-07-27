const express = require('express');
const router = express.Router();
const usuarioRolesController = require('../controllers/usuarioRolesController');

// Rutas para usuario_roles
router.post('/usuario_roles', usuarioRolesController.addUsuarioRol);
router.get('/usuario_roles', usuarioRolesController.getUsuarioRoles);
router.get('/usuario_roles/:user_role_id', usuarioRolesController.getUsuarioRolById);
router.put('/usuario_roles/:user_role_id', usuarioRolesController.updateUsuarioRol);
router.delete('/usuario_roles/:user_role_id', usuarioRolesController.deleteUsuarioRol);

module.exports = router;
