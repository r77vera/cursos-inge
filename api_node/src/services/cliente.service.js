const { Cliente, DocumentoTipo } = require('../models');

async function getAll() {
  return await Cliente.findAll({ include: [DocumentoTipo] });
}

async function getById(id) {
  const cliente = await Cliente.findByPk(id, { include: [DocumentoTipo] });
  if (!cliente) throw new Error('Cliente no encontrado');
  return cliente;
}

async function create(data) {
  return await Cliente.create(data);
}

async function update(id, data) {
  const cliente = await Cliente.findByPk(id);
  if (!cliente) throw new Error('Cliente no encontrado');
  return await cliente.update(data);
}

async function remove(id) {
  const cliente = await Cliente.findByPk(id);
  if (!cliente) throw new Error('Cliente no encontrado');
  return await cliente.destroy();
}

module.exports = { getAll, getById, create, update, remove };
