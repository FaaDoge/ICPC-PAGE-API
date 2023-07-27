// categoriasRoutes.js
const express = require('express');
const categoriasController = require('../controllers/categoriasController');

const router = express.Router();

router.get('/categorias', categoriasController.getAllCategorias);
router.get('/categorias/:category_id', categoriasController.getCategoriaById);
router.post('/categorias', categoriasController.addCategoria);
router.put('/categorias/:category_id', categoriasController.updateCategoria);
router.delete('/categorias/:category_id', categoriasController.deleteCategoria);

module.exports = router;
