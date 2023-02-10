const Message = require('../model/Message.model.js')
const User = require('../model/User.model')
const io = require('../socket')
const Room = require('../model/Room.model.js')

exports.postMessage = async (req, res, next) => {
    try {
      const user = req.user.id
      if (!user) {
        return res.status(403).json({
          message: 'no User Found'
        })
      }
      const content = req.body.content
      const room = req.body.roomId
  
      const message = new Message({
        sender: user,
        content,
        room
      })
      const countRoom = await Room.findById(room)
      countRoom.unreadCount += 1
      await countRoom.save() 
  
      const resMsg = await message.save()
      const {sender, ...otherRes} = resMsg._doc
      const userinfo = await User.findById(user).exec()
      const data = {sender: userinfo, ...otherRes}
      const socket = await io.getIO().emit('chat', { action: 'create', message: data })
      res.status(201).json({
        message: 'Successfully Added a Message',
        data
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }
 
  exports.getMessages = async (req, res, next) => {
    try {
      const room = req.params.roomId
      const data = await Message.find({ room:room }).populate({
        path: 'sender'
      }).exec()
      
      const countRoom = await Room.findById(room)
      countRoom.unreadCount = 0
      await countRoom.save() 
      res.status(200).json({
        message: 'Successfully Fteched Messages',
        data
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }