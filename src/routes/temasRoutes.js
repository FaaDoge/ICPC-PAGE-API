// temasRoutes.js
const express = require('express');
const temasController = require('../controllers/temasController');

const router = express.Router();

router.get('/temas', temasController.getAllTemas);
router.get('/temas/:topic_id', temasController.getTemaById);
router.post('/temas', temasController.addTema);
router.put('/temas/:topic_id', temasController.updateTema);
router.delete('/temas/:topic_id', temasController.deleteTema);
router.get('/temas/categoria/:category_id', temasController.getTemasByCategoryId);
module.exports = router;
