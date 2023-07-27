// codigosEjemploRoutes.js
const express = require('express');
const codigosEjemploController = require('../controllers/codigosEjemploController');

const router = express.Router();

router.get('/codigosejemplo', codigosEjemploController.getAllCodigosEjemplo);
router.get('/codigosejemplo/:code_id', codigosEjemploController.getCodigoEjemploById);
router.post('/codigosejemplo', codigosEjemploController.addCodigoEjemplo);
router.put('/codigosejemplo/:code_id', codigosEjemploController.updateCodigoEjemplo);
router.delete('/codigosejemplo/:code_id', codigosEjemploController.deleteCodigoEjemplo);

module.exports = router;
