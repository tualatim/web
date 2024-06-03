import jsonServer from 'json-server'
import autoIncrementId from './middlewares/autoIncrementId.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

// Add json-server's body parser middleware
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(autoIncrementId)
server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
