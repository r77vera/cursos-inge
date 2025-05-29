const { Unidad } = require('../models');

async function getAll() {
  return await Unidad.findAll();
}

async function getById(id) {
  const unidad = await Unidad.findByPk(id);
  if (!unidad) throw new Error('Unidad no encontrada');
  return unidad;
}

async function create(data) {
  return await Unidad.create(data);
}

async function update(id, data) {
  const unidad = await getById(id);
  return await unidad.update(data);
}

async function remove(id) {
  const unidad = await getById(id);
  return await unidad.destroy();
}

module.exports = { getAll, getById, create, update, remove };
