const { Usuario } = require('../models');
const { comparePassword } = require('../utils/hash');
const { generarToken } = require('../middlewares/auth.middleware');

async function login(email, password) {
  const usuario = await Usuario.findOne({ where: { email } });
    const passwordValido = await comparePassword(password, usuario.password);
  if (!usuario || !passwordValido) {
    throw new Error('Credenciales inválidas');
  }

  const token = generarToken(usuario);
  return { token, usuario: { id: usuario.id, rol: usuario.rol, email: usuario.email } };
}

module.exports = { login };
