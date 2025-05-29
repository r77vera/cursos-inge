module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Unidad', {
    id: { type: DataTypes.CHAR(3), primaryKey: true },
    descripcion: { type: DataTypes.STRING(50), allowNull: false }
  }, {
    tableName: 'unidades',
    timestamps: false
  });
};
