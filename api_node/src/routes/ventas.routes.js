const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/venta.controller')

router.get('/', ventaController.getAll);
router.get('/:id', ventaController.getById);
router.post('/', ventaController.create);

module.exports = router;