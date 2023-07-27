// favoritosRoutes.js
const express = require('express');
const favoritosController = require('../controllers/favoritosController');

const router = express.Router();

router.get('/favoritos', favoritosController.getAllFavoritos);
router.get('/favoritos/:favorite_id', favoritosController.getFavoritoById);
router.post('/favoritos', favoritosController.addFavorito);
router.delete('/favoritos/:favorite_id', favoritosController.deleteFavorito);

module.exports = router;
