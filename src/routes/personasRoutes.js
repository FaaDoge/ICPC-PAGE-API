// personasRoutes.js
const express = require('express');
const personasController = require('../controllers/personasController');

const router = express.Router();

router.get('/personas', personasController.getAllPersonas);
router.get('/personas/:person_id', personasController.getPersonaById);
router.post('/personas', personasController.addPersona);
router.put('/personas/:person_id', personasController.updatePersona);
router.delete('/personas/:person_id', personasController.deletePersona);

module.exports = router;
