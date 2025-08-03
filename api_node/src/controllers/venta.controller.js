const ventaService = require('../services/venta.service');

module.exports = {
    async getAll(req, res) {
        try {
            const ventas = await ventaService.getAll();
            res.json(ventas);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    async getById(req, res) {
        try {
            const venta = await ventaService.getById(req.params.id);
            res.json(venta);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    },

    async create(req, res) {
        try {
            const { detalles, ...ventaData } = req.body;
            const resultado = await ventaService.create(ventaData, detalles);
            res.status(201).json(resultado);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
};
