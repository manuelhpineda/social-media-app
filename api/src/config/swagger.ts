import { Application } from 'express'
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
  apis: ['**/routes/v1/*.ts', '**/models/*.ts'],
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)

const swaggerDocs = (app: Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  console.info(`Docs available at http://localhost:${PORT}/api-docs`)
}

export default swaggerDocs
