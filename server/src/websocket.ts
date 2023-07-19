import { io } from './httpServer'

io.on('connection', (socket) => {
  console.log('socket id:', socket.id)

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })

  socket.on('chatMessage', (message: string) => {
    io.emit('chatMessage', message)
  })
})
