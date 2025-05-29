const unidadService = require('../services/unidad.service');

module.exports = {
    async getAll(req, res) {
        try {
            const unidades = await unidadService.getAll();
            res.json(unidades);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async getById(req, res) {
        try {
            const unidad = await unidadService.getById(req.params.id);
            res.json(unidad);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    },

    async create(req, res) {
        try {
            const unidad = await unidadService.create(req.body);
            res.status(201).json(unidad);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async update(req, res) {
        try {
            const unidad = await unidadService.update(req.params.id, req.body);
            res.json(unidad);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    async delete(req, res) {
        try {
            await unidadService.remove(req.params.id);
            res.json({ message: 'Unidad eliminada correctamente' });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
};
