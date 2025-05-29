const detalleVentaService = require('../services/detalleVenta.service');

module.exports = {
  async getAll(req, res) {
    try {
      const detalles = await detalleVentaService.getAll();
      res.json(detalles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async getById(req, res) {
    try {
      const detalle = await detalleVentaService.getById(req.params.id);
      res.json(detalle);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  async create(req, res) {
    try {
      const nuevo = await detalleVentaService.create(req.body);
      res.status(201).json(nuevo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async update(req, res) {
    try {
      const actualizado = await detalleVentaService.update(req.params.id, req.body);
      res.json(actualizado);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  async delete(req, res) {
    try {
      await detalleVentaService.remove(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
