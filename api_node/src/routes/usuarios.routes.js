const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuario.controller')

router.get('/usuarios', usuarioController.getAll);
router.get('/usuarios/:id', usuarioController.getById);
router.post('/usuarios', usuarioController.create);
router.put('/usuarios/:id', usuarioController.update);
router.delete('/usuarios/:id', usuarioController.delete);

module.exports = router;