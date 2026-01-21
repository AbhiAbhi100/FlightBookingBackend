import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

function swaggerDocs(app) {
  console.log(' Swagger setup function CALLED');

  const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Flight Service API',
        version: '1.0.0',
        description: 'Flight Booking Backend APIs',
      },
      servers: [
        {
          url: 'http://localhost:3000',
        },
      ],
    },
    apis: ['**/routes/**/*.js'],
  };

  const swaggerSpec = swaggerJsdoc(swaggerOptions);

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log('Swagger Docs available at /api-docs');
}

export default swaggerDocs;
