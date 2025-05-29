const { DocumentoTipo } = require('../models');

async function getAll() {
  return await DocumentoTipo.findAll();
}

async function getById(id) {
  const tipo = await DocumentoTipo.findByPk(id);
  if (!tipo) throw new Error('Tipo de documento no encontrado');
  return tipo;
}

async function create(data) {
  return await DocumentoTipo.create(data);
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
