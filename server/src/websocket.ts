import { io } from './httpServer'

type JoinedChatArguments = {
  username: string
}

type ChatMessageArguments = {
  username: string
  message: string
}

type TypingArguments = {
  username: string
  typing: boolean
}

io.on('connection', async (socket) => {
  socket.on('joinedChat', ({ username }: JoinedChatArguments) => {
    socket.broadcast.emit('joinedChat', { username })

    socket.on('disconnect', () => {
      socket.broadcast.emit('leftChat', { username })
    })
  })

  socket.on('chatMessage', ({ message, username }: ChatMessageArguments) => {
    socket.broadcast.emit('chatMessage', { message, username })
  })

  socket.on('typing', ({ typing, username }: TypingArguments) => {
    socket.broadcast.emit('typing', { typing, username })
  })
})
