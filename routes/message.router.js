const {verifyToken} = require('../utils/verifyToken')

const messageController = require('../controller/message.controller.js')

const express = require('express')
// const { body } = require('express-validator')

const router = express.Router()

// Post API - create a Message
router.post('/', verifyToken, messageController.postMessage)

// Get API - Get all Messages
router.get('/:roomId', verifyToken, messageController.getMessages)

module.exports = router
