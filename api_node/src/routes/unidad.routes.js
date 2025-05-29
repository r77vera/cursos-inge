const express = require('express');
const router = express.Router();
const unidadController = require('../controllers/unidad.controller');

router.get('/', unidadController.getAll);
router.get('/:id', unidadController.getById);
router.post('/', unidadController.create);
router.put('/:id', unidadController.update);
router.delete('/:id', unidadController.delete);

module.exports = router;
