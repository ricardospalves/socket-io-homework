import express from 'express'
import http from 'node:http'
import path from 'node:path'
import { Server } from 'socket.io'

const app = express()

app.use(express.static(path.join(__dirname, '../..', 'client')))

const httpServer = http.createServer(app)

const io = new Server(httpServer)

export { httpServer, io }
