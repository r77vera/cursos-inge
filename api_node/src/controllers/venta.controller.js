const { Venta, DetalleVenta, Cliente, Usuario, ComprobanteTipo, Producto } = require('../models');

module.exports = {
    async getAll(req, res) {
        const ventas = await Venta.findAll({
            include: [
                { model: Cliente },
                { model: Usuario },
                { model: ComprobanteTipo },
                { model: DetalleVenta, include: [Producto] }
            ]
        });
        res.json(ventas);
    },

    async getById(req, res) {
        const venta = await Venta.findByPk(req.params.id, {
            include: [
                { model: Cliente },
                { model: Usuario },
                { model: ComprobanteTipo },
                { model: DetalleVenta, include: [Producto] }
            ]
        });
        if (!venta) return res.status(404).json({ message: 'Venta no encontrada' });
        res.json(venta);
    },

    async create(req, res) {
        const { detalles, ...ventaData } = req.body;

        const venta = await Venta.create(ventaData);
        const detallesGuardados = await Promise.all(detalles.map(d => DetalleVenta.create({ ...d, venta_id: venta.id })));

        res.status(201).json({ venta, detalles: detallesGuardados });
    }
};
