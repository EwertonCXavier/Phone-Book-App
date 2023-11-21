const ContactController = require('./app/controllers/ContactController')
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json')
const express = require('express')
const app = express()
const routes = require('./routes/index')
const errorHandler = require('./middlewares/errorHandler');
const cors = require('./middlewares/cors');

app.use(express.json());
// Swagger docs setup
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen('3000', () => {
  console.log('System is up and running!')
})

