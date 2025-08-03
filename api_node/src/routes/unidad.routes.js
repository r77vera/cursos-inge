const express = require('express');
const router = express.Router();
const unidadController = require('../controllers/unidad.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     Unidad:
 *       type: object
 *       required:
 *         - id
 *         - descripcion
 *       properties:
 *         id:
 *           type: string
 *           maxLength: 3
 *           description: ID de la unidad de medida
 *         descripcion:
 *           type: string
 *           maxLength: 50
 *           description: Descripción de la unidad de medida
 */

/**
 * @swagger
 * /unidad:
 *   get:
 *     summary: Obtener todas las unidades de medida
 *     tags: [Unidades]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de unidades de medida
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Unidad'
 */
router.get('/', unidadController.getAll);

/**
 * @swagger
 * /unidad/{id}:
 *   get:
 *     summary: Obtener una unidad de medida por ID
 *     tags: [Unidades]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la unidad de medida
 *     responses:
 *       200:
 *         description: Unidad de medida encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unidad'
 *       404:
 *         description: Unidad de medida no encontrada
 */
router.get('/:id', unidadController.getById);

/**
 * @swagger
 * /unidad:
 *   post:
 *     summary: Crear una nueva unidad de medida
 *     tags: [Unidades]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Unidad'
 *     responses:
 *       201:
 *         description: Unidad de medida creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unidad'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', unidadController.create);

/**
 * @swagger
 * /unidad/{id}:
 *   put:
 *     summary: Actualizar una unidad de medida
 *     tags: [Unidades]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la unidad de medida
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Unidad'
 *     responses:
 *       200:
 *         description: Unidad de medida actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Unidad'
 *       404:
 *         description: Unidad de medida no encontrada
 */
router.put('/:id', unidadController.update);

/**
 * @swagger
 * /unidad/{id}:
 *   delete:
 *     summary: Eliminar una unidad de medida
 *     tags: [Unidades]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la unidad de medida
 *     responses:
 *       204:
 *         description: Unidad de medida eliminada
 *       404:
 *         description: Unidad de medida no encontrada
 */
router.delete('/:id', unidadController.delete);

module.exports = router;
