import { io } from './httpServer'

io.on('connection', (socket) => {
  console.log('socket id:', socket.id)
})
