import { Application, Response, Request } from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import { PORT } from './contants'

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Social Media API',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/v1/*.ts', './src/validations/*.ts'],
  components: {
    securitySchemas: {
      bearerAuth: {
        type: 'http',
        schema: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

const swaggerDocs = (app: Application) => {
  //Swagger page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  //Docs in JSON format
  app.get('/docs.json', (req: Request, res: Response) => {
    res.setHeader('Content-type', 'application/json')
    res.send(swaggerSpec)
  })

  console.info(`Docs available at http://localhost:${PORT}/docs`)
}

export default swaggerDocs
