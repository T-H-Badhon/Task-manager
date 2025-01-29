import express from 'express'
import cors from 'cors'
import globalErrorHandler from './app/middlewares/GlobalErrorHandler'
import router from './app/routes'

const app = express()

app.use(
  cors({
    origin: ['http://localhost:5173' ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Restrict allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Restrict allowed headers
    credentials: true, // Include credentials (cookies, authorization headers, etc.)
  }),
)
app.use(express.json())

app.use('/api/v1', router)

app.get('/', (req, res) => {
  res.send('server is running')
})

app.use(globalErrorHandler)

app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Invalid URL !!!',
    error: `${req.path} is not Found`,
  });
});
export default app
