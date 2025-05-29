const authService = require('../services/auth.service');

module.exports = {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      res.json(result);
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  },

  logout(req, res) {
    // Logout solo se maneja en frontend (borrar token del cliente)
    res.json({ message: 'Logout exitoso. Elimina el token en el cliente.' });
  }
};
