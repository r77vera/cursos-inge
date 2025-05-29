const express = require('express');
const router = express.Router();
const afectacionTipoController = require('../controllers/afectacionTipo.controller');

router.get('/', afectacionTipoController.getAll);
router.get('/:id', afectacionTipoController.getById);
router.post('/', afectacionTipoController.create);
router.put('/:id', afectacionTipoController.update);
router.delete('/:id', afectacionTipoController.delete);

module.exports = router;