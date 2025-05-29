require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/models');
const routes = require('./src/routes');
const { errorHandler } = require('./src/middlewares/error.middleware');

const app = express();
app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => console.log(`API corriendo en puerto ${PORT}`));
});