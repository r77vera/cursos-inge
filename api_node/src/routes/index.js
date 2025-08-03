const express = require('express');
const router = express.Router();
const { autenticarToken } = require('../middlewares/auth.middleware')

router.use('/auth', require('./auth.routes'));

router.use('/usuarios', autenticarToken, require('./usuarios.routes'));
router.use('/clientes', autenticarToken, require('./clientes.routes'));
router.use('/tipoDocumento', autenticarToken, require('./documentoTipo.routes'));
router.use('/ventas', autenticarToken, require('./ventas.routes'));
router.use('/unidad', autenticarToken, require('./unidad.routes'));
router.use('/productos', autenticarToken, require('./productos.routes'));
router.use('/detalleVenta', autenticarToken, require('./detalleVenta.routes'));
router.use('/afectacionTipos', autenticarToken, require('./afectacionTipo.routes'));
router.use('/comprobanteTipos', autenticarToken, require('./comprobanteTipo.routes'))
module.exports = router;