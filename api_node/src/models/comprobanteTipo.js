module.exports = (sequelize, DataTypes) => {
  return sequelize.define('ComprobanteTipo', {
    id: { type: DataTypes.CHAR(2), primaryKey: true },
    descripcion: { type: DataTypes.STRING(50), allowNull: false }
  }, {
    tableName: 'comprobante_tipos',
    timestamps: false
  });
};
