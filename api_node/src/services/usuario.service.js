const { Usuario } = require('../models');
const { hashPassword } = require('../utils/hash');

async function getAll() {
  return await Usuario.findAll({
    attributes: { exclude: ['password'] }
  });
}

async function getById(id) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) throw new Error('Usuario no encontrado');
  const { password, ...usuarioSinPassword } = usuario.toJSON();
  return usuarioSinPassword;
}

async function create(data) {
  const hashedPassword = await hashPassword(data.password);
  const usuario = await Usuario.create({ ...data, password: hashedPassword });
  const { password, ...usuarioSinPassword } = usuario.toJSON();
  return usuarioSinPassword;
}

async function update(id, data) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) throw new Error('Usuario no encontrado');

  const dataToUpdate = { ...data };
  if (data.password) {
    dataToUpdate.password = await hashPassword(data.password);
  }

  await usuario.update(dataToUpdate);
  const { password, ...usuarioSinPassword } = usuario.toJSON();
  return usuarioSinPassword;
}

async function remove(id) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) throw new Error('Usuario no encontrado');
  await usuario.destroy();
}

module.exports = { getAll, getById, create, update, remove };
