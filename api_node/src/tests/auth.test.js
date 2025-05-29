const request = require('supertest');
const app = require('../app');

describe('Auth', () => {
  it('debería rechazar login con credenciales inválidas', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'fake@correo.com', password: '123456' });
    expect(res.statusCode).toBe(404);
  });
});