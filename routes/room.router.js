const {verifyToken} = require('../utils/verifyToken')

const roomControllers = require('../controller/room.controller.js')

const express = require('express')

const router = express.Router()

// Post API - Create Room
router.post('/', verifyToken, roomControllers.postRoom)

// Get API - Get All Rooms
router.get('/', verifyToken, roomControllers.getRooms)

// Get API - Get Room
router.get('/:roomId', verifyToken, roomControllers.getRoom)

module.exports = router
