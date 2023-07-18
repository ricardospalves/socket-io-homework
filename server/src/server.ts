import './dotenvConfig'
import { httpServer } from './httpServer'
import './websocket'

const PORT = 3001

httpServer.listen(PORT, () => {
  console.log(`🚀 server running on http://localhost:${PORT}`)
})
