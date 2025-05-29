const { Producto, Unidad, AfectacionTipo } = require('../models');

async function getAll() {
  return await Producto.findAll({
    include: [Unidad, AfectacionTipo]
  });
}

async function getById(id) {
  const producto = await Producto.findByPk(id, {
    include: [Unidad, AfectacionTipo]
  });
  if (!producto) throw new Error('Producto no encontrado');
  return producto;
}

async function create(data) {
  return await Producto.create(data);
}

async function update(id, data) {
  const producto = await Producto.findByPk(id);
  if (!producto) throw new Error('Producto no encontrado');
  return await producto.update(data);
}

async function remove(id) {
  const producto = await Producto.findByPk(id);
  if (!producto) throw new Error('Producto no encontrado');
  return await producto.destroy();
}

module.exports = { getAll, getById, create, update, remove };
