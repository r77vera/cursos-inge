module.exports = (sequelize, DataTypes) => {
  return sequelize.define('DetalleVenta', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    venta_id: { type: DataTypes.INTEGER, allowNull: false },
    producto_id: { type: DataTypes.INTEGER, allowNull: false },
    cantidad: { type: DataTypes.DECIMAL(6, 2), allowNull: false }
  }, {
    tableName: 'detalle_ventas',
    timestamps: false
  });
};
