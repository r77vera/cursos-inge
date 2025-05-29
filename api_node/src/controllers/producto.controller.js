const productoService = require('../services/producto.service');

module.exports = {
  async getAll(req, res) {
    try {
      const productos = await productoService.getAll();
      res.json(productos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async getById(req, res) {
    try {
      const producto = await productoService.getById(req.params.id);
      res.json(producto);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  async create(req, res) {
    try {
      const nuevo = await productoService.create(req.body);
      res.status(201).json(nuevo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async update(req, res) {
    try {
      const actualizado = await productoService.update(req.params.id, req.body);
      res.json(actualizado);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  async delete(req, res) {
    try {
      await productoService.remove(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
