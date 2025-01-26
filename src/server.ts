import mongoose from 'mongoose'
import app from './app'
import { Server } from 'http'
import { seedUncategory } from './app/utilities/SeedUncategory'

let server: Server

function main() {
  mongoose.connect(
    'mongodb+srv://level2-admin:level2pass@cluster0.3qumfwu.mongodb.net/inventorymanagement?retryWrites=true&w=majority',
  )

  server = app.listen(4000, () => {
    console.log(`app listening on port ${4000}`)
  })

  seedUncategory()
}

main()

process.on('unhandledRejection', () => {
  console.log('Unhandled Rejection is detected. shuting down...')
  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () => {
  console.log('Uncaught Exception is detected. shutting down ...')
  process.exit(1)
})
