const { DetalleVenta, Producto } = require('../models');

async function getAll() {
  return await DetalleVenta.findAll({
    include: [Producto] // si quieres incluir datos del producto relacionado
  });
}

async function getById(id) {
  const detalle = await DetalleVenta.findByPk(id, {
    include: [Producto]
  });
  if (!detalle) throw new Error('Detalle de venta no encontrado');
  return detalle;
}

async function create(data) {
  return await DetalleVenta.create(data);
}

async function update(id, data) {
  const detalle = await DetalleVenta.findByPk(id);
  if (!detalle) throw new Error('Detalle de venta no encontrado');
  return await detalle.update(data);
}

async function remove(id) {
  const detalle = await DetalleVenta.findByPk(id);
  if (!detalle) throw new Error('Detalle de venta no encontrado');
  return await detalle.destroy();
}

module.exports = { getAll, getById, create, update, remove };
