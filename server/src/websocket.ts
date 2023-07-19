import { io } from './httpServer'

io.on('connection', async (socket) => {
  socket.broadcast.emit('joinedChat')

  socket.on('disconnect', () => {
    socket.broadcast.emit('leftChat')
  })

  socket.on('chatMessage', (message: string) => {
    io.emit('chatMessage', message)
  })
})
