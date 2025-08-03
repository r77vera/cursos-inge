const express = require('express');
const router = express.Router();
const documentoTipoController = require('../controllers/documentoTipo.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *     DocumentoTipo:
 *       type: object
 *       required:
 *         - id
 *         - descripcion
 *       properties:
 *         id:
 *           type: string
 *           maxLength: 1
 *           description: ID del tipo de documento
 *         descripcion:
 *           type: string
 *           maxLength: 50
 *           description: Descripción del tipo de documento
 */

/**
 * @swagger
 * /tipoDocumento:
 *   get:
 *     summary: Obtener todos los tipos de documento
 *     tags: [Tipos de Documento]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tipos de documento
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DocumentoTipo'
 */
router.get('/', documentoTipoController.getAll);

/**
 * @swagger
 * /tipoDocumento/{id}:
 *   get:
 *     summary: Obtener un tipo de documento por ID
 *     tags: [Tipos de Documento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del tipo de documento
 *     responses:
 *       200:
 *         description: Tipo de documento encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DocumentoTipo'
 *       404:
 *         description: Tipo de documento no encontrado
 */
router.get('/:id', documentoTipoController.getById);

/**
 * @swagger
 * /tipoDocumento:
 *   post:
 *     summary: Crear un nuevo tipo de documento
 *     tags: [Tipos de Documento]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DocumentoTipo'
 *     responses:
 *       201:
 *         description: Tipo de documento creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DocumentoTipo'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', documentoTipoController.create);

/**
 * @swagger
 * /tipoDocumento/{id}:
 *   put:
 *     summary: Actualizar un tipo de documento
 *     tags: [Tipos de Documento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del tipo de documento
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DocumentoTipo'
 *     responses:
 *       200:
 *         description: Tipo de documento actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DocumentoTipo'
 *       404:
 *         description: Tipo de documento no encontrado
 */
router.put('/:id', documentoTipoController.update);

/**
 * @swagger
 * /tipoDocumento/{id}:
 *   delete:
 *     summary: Eliminar un tipo de documento
 *     tags: [Tipos de Documento]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del tipo de documento
 *     responses:
 *       204:
 *         description: Tipo de documento eliminado
 *       404:
 *         description: Tipo de documento no encontrado
 */
router.delete('/:id', documentoTipoController.delete);

module.exports = router;
