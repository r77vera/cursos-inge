const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller')

/**
 * @swagger
 * components:
 *   schemas:
 *     Producto:
 *       type: object
 *       required:
 *         - afectacion_tipo_id
 *         - unidad_id
 *         - codigo
 *         - nombre
 *         - precio_unitario
 *       properties:
 *         id:
 *           type: integer
 *           description: ID autogenerado del producto
 *         afectacion_tipo_id:
 *           type: string
 *           maxLength: 2
 *           description: ID del tipo de afectación tributaria
 *         unidad_id:
 *           type: string
 *           maxLength: 3
 *           description: ID de la unidad de medida
 *         codigo:
 *           type: string
 *           maxLength: 50
 *           description: Código del producto
 *         nombre:
 *           type: string
 *           maxLength: 50
 *           description: Nombre del producto
 *         descripcion:
 *           type: string
 *           maxLength: 255
 *           description: Descripción del producto
 *         imagen:
 *           type: string
 *           maxLength: 255
 *           description: URL de la imagen del producto
 *         precio_unitario:
 *           type: number
 *           format: decimal
 *           description: Precio unitario del producto
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de productos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Producto'
 */
router.get('/', productoController.getAll);

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:id', productoController.getById);

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       201:
 *         description: Producto creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', productoController.create);

/**
 * @swagger
 * /productos/{id}:
 *   put:
 *     summary: Actualizar un producto
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Producto'
 *     responses:
 *       200:
 *         description: Producto actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Producto'
 *       404:
 *         description: Producto no encontrado
 */
router.put('/:id', productoController.update);

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Productos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del producto
 *     responses:
 *       204:
 *         description: Producto eliminado
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/:id', productoController.delete);

module.exports = router;