const { Usuario } = require('../models');

module.exports = {
  async getAll(req, res) {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  },

  async getById(req, res) {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(usuario);
  },

  async create(req, res) {
    const nuevo = await Usuario.create(req.body);
    res.status(201).json(nuevo);
  },

  async update(req, res) {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    await usuario.update(req.body);
    res.json(usuario);
  },

  async delete(req, res) {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
    await usuario.destroy();
    res.status(204).send();
  }
};
