module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Usuario', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    rol: { type: DataTypes.ENUM('admin', 'vendedor', 'cajero'), allowNull: false },
    activo: { type: DataTypes.TINYINT, defaultValue: 1 }
  }, {
    tableName: 'users',
    timestamps: false
  });
};
