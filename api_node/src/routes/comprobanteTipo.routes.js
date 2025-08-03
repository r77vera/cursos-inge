const express = require('express');
const router = express.Router();
const comprobanteTipoController = require('../controllers/comprobanteTipo.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     ComprobanteTipo:
 *       type: object
 *       required:
 *         - id
 *         - descripcion
 *       properties:
 *         id:
 *           type: string
 *           maxLength: 2
 *           description: ID del tipo de comprobante
 *         descripcion:
 *           type: string
 *           maxLength: 50
 *           description: Descripción del tipo de comprobante
 */

/**
 * @swagger
 * /comprobanteTipos:
 *   get:
 *     summary: Obtener todos los tipos de comprobante
 *     tags: [Tipos de Comprobante]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tipos de comprobante
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ComprobanteTipo'
 */
router.get('/', comprobanteTipoController.getAll);

/**
 * @swagger
 * /comprobanteTipos/{id}:
 *   get:
 *     summary: Obtener un tipo de comprobante por ID
 *     tags: [Tipos de Comprobante]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del tipo de comprobante
 *     responses:
 *       200:
 *         description: Tipo de comprobante encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ComprobanteTipo'
 *       404:
 *         description: Tipo de comprobante no encontrado
 */
router.get('/:id', comprobanteTipoController.getById);

/**
 * @swagger
 * /comprobanteTipos:
 *   post:
 *     summary: Crear un nuevo tipo de comprobante
 *     tags: [Tipos de Comprobante]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ComprobanteTipo'
 *     responses:
 *       201:
 *         description: Tipo de comprobante creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ComprobanteTipo'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', comprobanteTipoController.create);

/**
 * @swagger
 * /comprobanteTipos/{id}:
 *   put:
 *     summary: Actualizar un tipo de comprobante
 *     tags: [Tipos de Comprobante]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del tipo de comprobante
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ComprobanteTipo'
 *     responses:
 *       200:
 *         description: Tipo de comprobante actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ComprobanteTipo'
 *       404:
 *         description: Tipo de comprobante no encontrado
 */
router.put('/:id', comprobanteTipoController.update);

/**
 * @swagger
 * /comprobanteTipos/{id}:
 *   delete:
 *     summary: Eliminar un tipo de comprobante
 *     tags: [Tipos de Comprobante]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del tipo de comprobante
 *     responses:
 *       204:
 *         description: Tipo de comprobante eliminado
 *       404:
 *         description: Tipo de comprobante no encontrado
 */
router.delete('/:id', comprobanteTipoController.delete);

module.exports = router;