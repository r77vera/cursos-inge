module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Cliente', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    documento_tipo_id: { type: DataTypes.CHAR(1), allowNull: false },
    numero_documento: { type: DataTypes.STRING(15), allowNull: false },
    razon_social: { type: DataTypes.STRING(100), allowNull: false },
    direccion: { type: DataTypes.STRING(100) }
  }, {
    tableName: 'clientes',
    timestamps: false
  });
};
