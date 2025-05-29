module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Producto', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    afectacion_tipo_id: { type: DataTypes.CHAR(2), allowNull: false },
    unidad_id: { type: DataTypes.CHAR(3), allowNull: false },
    codigo: { type: DataTypes.STRING(50), allowNull: false },
    nombre: { type: DataTypes.STRING(50), allowNull: false },
    descripcion: { type: DataTypes.STRING(255) },
    imagen: { type: DataTypes.STRING(255) },
    precio_unitario: { type: DataTypes.DECIMAL(6, 2), allowNull: false }
  }, {
    tableName: 'productos',
    timestamps: false
  });
};
