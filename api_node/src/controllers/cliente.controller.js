const { Cliente, DocumentoTipo } = require('../models');

module.exports = {
  async getAll(req, res) {
    const clientes = await Cliente.findAll({ include: [DocumentoTipo] });
    res.json(clientes);
  },

  async getById(req, res) {
    const cliente = await Cliente.findByPk(req.params.id, { include: [DocumentoTipo] });
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
    res.json(cliente);
  },

  async create(req, res) {
    const nuevo = await Cliente.create(req.body);
    res.status(201).json(nuevo);
  },

  async update(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
    await cliente.update(req.body);
    res.json(cliente);
  },

  async delete(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ message: 'Cliente no encontrado' });
    await cliente.destroy();
    res.status(204).send();
  }
};
