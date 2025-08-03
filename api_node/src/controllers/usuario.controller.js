const usuarioService = require('../services/usuario.service');

module.exports = {
  async getAll(req, res) {
    try {
      const usuarios = await usuarioService.getAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getById(req, res) {
    try {
      const usuario = await usuarioService.getById(req.params.id);
      res.json(usuario);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevo = await usuarioService.create(req.body);
      res.status(201).json(nuevo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async update(req, res) {
    try {
      const usuario = await usuarioService.update(req.params.id, req.body);
      res.json(usuario);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },

  async delete(req, res) {
    try {
      await usuarioService.remove(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
};
