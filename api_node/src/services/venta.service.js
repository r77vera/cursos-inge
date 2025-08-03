const { Venta, DetalleVenta, Cliente, Usuario, ComprobanteTipo, Producto } = require('../models');

async function getAll() {
  return await Venta.findAll({
    include: [
      { model: Cliente },
      { model: Usuario },
      { model: ComprobanteTipo },
      { model: DetalleVenta, include: [Producto] }
    ]
  });
}

async function getById(id) {
  const venta = await Venta.findByPk(id, {
    include: [
      { model: Cliente },
      { model: Usuario },
      { model: ComprobanteTipo },
      { model: DetalleVenta, include: [Producto] }
    ]
  });
  if (!venta) throw new Error('Venta no encontrada');
  return venta;
}

async function create(ventaData, detalles) {
  const venta = await Venta.create(ventaData);
  const detallesGuardados = await Promise.all(
    detalles.map(d => DetalleVenta.create({ ...d, venta_id: venta.id }))
  );
  return { venta, detalles: detallesGuardados };
}

module.exports = { getAll, getById, create };
