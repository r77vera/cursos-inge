const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Unidad = require('./unidad')(sequelize, DataTypes);
const AfectacionTipo = require('./afectacionTipo')(sequelize, DataTypes);
const Producto = require('./producto')(sequelize, DataTypes);
const Cliente = require('./cliente')(sequelize, DataTypes);
const DocumentoTipo = require('./documentoTipo')(sequelize, DataTypes);
const ComprobanteTipo = require('./comprobanteTipo')(sequelize, DataTypes);
const Venta = require('./venta')(sequelize, DataTypes);
const DetalleVenta = require('./detalleVenta')(sequelize, DataTypes);
const Usuario = require('./usuario')(sequelize, DataTypes);

// Relaciones
Producto.belongsTo(Unidad, { foreignKey: 'unidad_id' });
Producto.belongsTo(AfectacionTipo, { foreignKey: 'afectacion_tipo_id' });

Cliente.belongsTo(DocumentoTipo, { foreignKey: 'documento_tipo_id' });

Venta.belongsTo(Usuario, { foreignKey: 'user_id' });
Venta.belongsTo(Cliente, { foreignKey: 'cliente_id' });
Venta.belongsTo(ComprobanteTipo, { foreignKey: 'comprobante_tipo_id' });

DetalleVenta.belongsTo(Venta, { foreignKey: 'venta_id' });
DetalleVenta.belongsTo(Producto, { foreignKey: 'producto_id' });

Venta.hasMany(DetalleVenta, { foreignKey: 'venta_id' });

module.exports = {
  sequelize,
  Unidad,
  AfectacionTipo,
  Producto,
  Cliente,
  DocumentoTipo,
  ComprobanteTipo,
  Venta,
  DetalleVenta,
  Usuario
};
