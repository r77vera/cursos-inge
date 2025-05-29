const afectacionTipoService = require('../services/afectacionTipo.service');

module.exports = {
    async getAll(req, res) {
        try {
            const tipos = await afectacionTipoService.getAll();
            res.json(tipos);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async getById(req, res) {
        try {
            const tipo = await afectacionTipoService.getById(req.params.id);
            res.json(tipo);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    },

    async create(req, res) {
        try {
            const tipo = await afectacionTipoService.create(req.body);
            res.status(201).json(tipo);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async update(req, res) {
        try {
            const tipo = await afectacionTipoService.update(req.params.id, req.body);
            res.json(tipo);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async delete(req, res) {
        try {
            await afectacionTipoService.remove(req.params.id);
            res.json({ message: 'Afectación eliminada correctamente' });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
};
