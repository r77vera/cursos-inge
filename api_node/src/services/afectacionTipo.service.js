const { AfectacionTipo } = require('../models');

async function getAll() {
  return await AfectacionTipo.findAll();
}

async function getById(id) {
  const tipo = await AfectacionTipo.findByPk(id);
  if (!tipo) throw new Error('Tipo de afectación no encontrado');
  return tipo;
}

async function create(data) {
  return await AfectacionTipo.create(data);
}

async function update(id, data) {
  const tipo = await getById(id);
  return await tipo.update(data);
}

async function remove(id) {
  const tipo = await getById(id);
  return await tipo.destroy();
}

module.exports = { getAll, getById, create, update, remove };
