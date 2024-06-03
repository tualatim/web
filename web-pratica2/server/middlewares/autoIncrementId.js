import { readFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const autoIncrementId = (req, res, next) => {
  console.log('Request body before:', req.body)
  if (req.method === 'POST') {
    const dbPath = path.join(__dirname, '../db.json')
    const db = JSON.parse(readFileSync(dbPath, 'utf-8'))
    const resource = req.path.split('/')[1]

    let id
    if (db[resource] && db[resource].length > 0) {
      id = db[resource][db[resource].length - 1].id + 1
    } else {
      id = 1
    }

    req.body = {
      id,
      ...req.body
    }
  }
  console.log('Request body after:', req.body)
  next()
}

export default autoIncrementId
