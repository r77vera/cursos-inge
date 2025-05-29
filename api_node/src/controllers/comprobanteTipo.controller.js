const comprobanteTipoService = require('../services/comprobanteTipo.service');

module.exports = {
  async getAll(req, res) {
    try {
      const tipos = await comprobanteTipoService.getAll();
      res.json(tipos);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async getById(req, res) {
    try {
      const tipo = await comprobanteTipoService.getById(req.params.id);
      res.json(tipo);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },

  async create(req, res) {
    try {
      const tipo = await comprobanteTipoService.create(req.body);
      res.status(201).json(tipo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async update(req, res) {
    try {
      const tipo = await comprobanteTipoService.update(req.params.id, req.body);
      res.json(tipo);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async delete(req, res) {
    try {
      await comprobanteTipoService.remove(req.params.id);
      res.json({ message: 'Tipo de comprobante eliminado correctamente' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};
