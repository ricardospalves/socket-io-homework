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

const onlineUsers = new Map<string, { username: string; socketID: string }>()

io.on('connection', async (socket) => {
  socket.on('joinedChat', async ({ username }: JoinedChatArguments) => {
    const socketID = socket.id

    socket.broadcast.emit('joinedChat', { username })

    onlineUsers.set(socketID, {
      socketID,
      username,
    })

    io.emit('addUserOnline', [...onlineUsers.values()])

    socket.on('disconnect', () => {
      socket.broadcast.emit('leftChat', { username })

      onlineUsers.delete(socketID)
      io.emit('removeUserOnline', [...onlineUsers.values()])
    })
  })

  socket.on('chatMessage', ({ message, username }: ChatMessageArguments) => {
    socket.broadcast.emit('chatMessage', { message, username })
  })

  socket.on('typing', ({ typing, username }: TypingArguments) => {
    socket.broadcast.emit('typing', { typing, username })
  })
})
