const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');
const { generarToken } = require('../middlewares/auth.middleware');

async function login(email, password) {
  const usuario = await Usuario.findOne({ where: { email } });
  if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
    throw new Error('Credenciales inválidas');
  }

  const token = generarToken(usuario);
  return { token, usuario: { id: usuario.id, rol: usuario.rol, email: usuario.email } };
}

module.exports = { login };
