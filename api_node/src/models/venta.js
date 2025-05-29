module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Venta', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    comprobante_tipo_id: { type: DataTypes.CHAR(2), allowNull: false },
    cliente_id: { type: DataTypes.INTEGER, allowNull: false },
    serie: { type: DataTypes.STRING(4), allowNull: false },
    correlativo: { type: DataTypes.INTEGER, allowNull: false },
    forma_pago: { type: DataTypes.STRING(20) },
    fecha: { type: DataTypes.DATE, allowNull: false },
    impuesto: { type: DataTypes.DECIMAL(8, 2), defaultValue: 0 },
    total: { type: DataTypes.DECIMAL(8, 2), defaultValue: 0 }
  }, {
    tableName: 'ventas',
    timestamps: false
  });
};
