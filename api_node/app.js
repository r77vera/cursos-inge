require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');
const { sequelize } = require('./src/models');
const routes = require('./src/routes');
const { errorHandler } = require('./src/middlewares/error.middleware');

const app = express();

// Middlewares
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', routes);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`API corriendo en puerto ${PORT}`);
    console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
  });
});