let io

module.exports = {
  init: httpServer => {
    io = require('socket.io')(httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "OPTIONS"]
      }
    })
    return io
  },
  getIO: () => {
    if (!io) {
      console.log('Socket.io not initialized!')
      throw new Error('Socket.io not initialized!')
    }
    return io
  }
}