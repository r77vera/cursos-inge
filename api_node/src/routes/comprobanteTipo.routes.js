const express = require('express');
const router = express.Router();
const comprobanteTipoController = require('../controllers/comprobanteTipo.controller');

router.get('/', comprobanteTipoController.getAll);
router.get('/:id', comprobanteTipoController.getById);
router.post('/', comprobanteTipoController.create);
router.put('/:id', comprobanteTipoController.update);
router.delete('/:id', comprobanteTipoController.delete);

module.exports = router;