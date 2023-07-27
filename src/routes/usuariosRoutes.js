// usuariosRoutes.js
const express = require('express');
const usuariosController = require('../controllers/usuariosController');

const router = express.Router();

router.get('/usuarios', usuariosController.getAllUsuarios);
router.get('/usuarios/:user_id', usuariosController.getUsuarioById);
router.post('/usuarios', usuariosController.addUsuario);
router.put('/usuarios/:user_id', usuariosController.updateUsuario);
router.delete('/usuarios/:user_id', usuariosController.deleteUsuario);

module.exports = router;
