const documentoTipoService = require('../services/documentoTipo.service');

module.exports = {
    async getAll(req, res) {
        try {
            const tipos = await documentoTipoService.getAll();
            res.json(tipos);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async getById(req, res) {
        try {
            const tipo = await documentoTipoService.getById(req.params.id);
            res.json(tipo);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    },

    async create(req, res) {
        try {
            const tipo = await documentoTipoService.create(req.body);
            res.status(201).json(tipo);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async update(req, res) {
        try {
            const tipo = await documentoTipoService.update(req.params.id, req.body);
            res.json(tipo);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async delete(req, res) {
        try {
            await documentoTipoService.remove(req.params.id);
            res.json({ message: 'Eliminado correctamente' });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
};
