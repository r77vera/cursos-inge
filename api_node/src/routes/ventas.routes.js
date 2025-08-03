const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/venta.controller')

/**
 * @swagger
 * components:
 *   schemas:
 *     DetalleVenta:
 *       type: object
 *       required:
 *         - producto_id
 *         - cantidad
 *       properties:
 *         producto_id:
 *           type: integer
 *           description: ID del producto
 *         cantidad:
 *           type: number
 *           format: decimal
 *           description: Cantidad del producto
 *     Venta:
 *       type: object
 *       required:
 *         - user_id
 *         - comprobante_tipo_id
 *         - cliente_id
 *         - serie
 *         - correlativo
 *         - fecha
 *         - detalles
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado de la venta
 *         user_id:
 *           type: integer
 *           description: ID del usuario que realiza la venta
 *         comprobante_tipo_id:
 *           type: string
 *           maxLength: 2
 *           description: ID del tipo de comprobante
 *         cliente_id:
 *           type: integer
 *           description: ID del cliente
 *         serie:
 *           type: string
 *           maxLength: 4
 *           description: Serie del comprobante
 *         correlativo:
 *           type: integer
 *           description: Número correlativo del comprobante
 *         forma_pago:
 *           type: string
 *           maxLength: 20
 *           description: Forma de pago
 *         fecha:
 *           type: string
 *           format: date-time
 *           description: Fecha de la venta
 *         impuesto:
 *           type: number
 *           format: decimal
 *           description: Monto del impuesto
 *         total:
 *           type: number
 *           format: decimal
 *           description: Monto total de la venta
 *         detalles:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/DetalleVenta'
 *           description: Detalles de la venta
 */

/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ventas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Venta'
 */
router.get('/', ventaController.getAll);

/**
 * @swagger
 * /ventas/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       404:
 *         description: Venta no encontrada
 */
router.get('/:id', ventaController.getById);

/**
 * @swagger
 * /ventas:
 *   post:
 *     summary: Crear una nueva venta
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       201:
 *         description: Venta creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venta'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', ventaController.create);

module.exports = router;