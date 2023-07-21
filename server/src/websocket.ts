import { io } from './httpServer'

type ChatMessageArguments = {
  username: string
  message: string
}

type TypingArguments = {
  username: string
  typing: boolean
}

io.on('connection', async (socket) => {
  socket.broadcast.emit('joinedChat')

  socket.on('disconnect', () => {
    socket.broadcast.emit('leftChat')
  })

  socket.on('chatMessage', ({ message, username }: ChatMessageArguments) => {
    io.emit('chatMessage', { message, username })
  })

  socket.on('typing', ({ typing, username }: TypingArguments) => {
    socket.broadcast.emit('typing', { typing, username })
  })
})
