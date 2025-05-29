const express = require('express');
const router = express.Router();
const documentoTipoController = require('../controllers/documentoTipo.controller');

router.get('/', documentoTipoController.getAll);
router.get('/:id', documentoTipoController.getById);
router.post('/', documentoTipoController.create);
router.put('/:id', documentoTipoController.update);
router.delete('/:id', documentoTipoController.delete);

module.exports = router;
