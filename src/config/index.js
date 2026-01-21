import serverConfig from './server-config.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
export default serverConfig;