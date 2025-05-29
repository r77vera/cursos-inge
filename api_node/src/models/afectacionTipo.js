module.exports = (sequelize, DataTypes) => {
  return sequelize.define('AfectacionTipo', {
    id: { type: DataTypes.CHAR(2), primaryKey: true },
    descripcion: { type: DataTypes.STRING(50), allowNull: false },
    letra: { type: DataTypes.CHAR(1), allowNull: false },
    codigo: { type: DataTypes.CHAR(4), allowNull: false },
    porcentaje: { type: DataTypes.DECIMAL(4, 2), allowNull: false }
  }, {
    tableName: 'afectacion_tipos',
    timestamps: false
  });
};
