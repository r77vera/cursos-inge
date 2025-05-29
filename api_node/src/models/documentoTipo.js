module.exports = (sequelize, DataTypes) => {
  return sequelize.define('DocumentoTipo', {
    id: { type: DataTypes.CHAR(1), primaryKey: true },
    descripcion: { type: DataTypes.STRING(50), allowNull: false }
  }, {
    tableName: 'documento_tipos',
    timestamps: false
  });
};
