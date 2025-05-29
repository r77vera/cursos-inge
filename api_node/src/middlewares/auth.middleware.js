const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET || 'tu_clave_secreta';

module.exports = {
  autenticarToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token requerido' });

    jwt.verify(token, SECRET_KEY, (err, usuario) => {
      if (err) return res.status(403).json({ message: 'Token inválido' });
      req.usuario = usuario;
      next();
    });
  },

  generarToken(usuario) {
    return jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      SECRET_KEY,
      { expiresIn: '8h' }
    );
  }
};
