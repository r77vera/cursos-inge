const clienteService = require('../services/cliente.service');

module.exports = {
  async getAll(req, res) {
    try {
      const clientes = await clienteService.getAll();
      res.json(clientes);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async getById(req, res) {
    try {
      const cliente = await clienteService.getById(req.params.id);
      res.json(cliente);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  async create(req, res) {
    try {
      const nuevo = await clienteService.create(req.body);
      res.status(201).json(nuevo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async update(req, res) {
    try {
      const cliente = await clienteService.update(req.params.id, req.body);
      res.json(cliente);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  async delete(req, res) {
    try {
      await clienteService.remove(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
