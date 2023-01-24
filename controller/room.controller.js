const Room = require('../model/Room.model.js')
const User = require('../model/User.model.js')


exports.postRoom = async (req, res, next) => {
    try {
      const user1 = req.user.id
      const user2 = req.body.userId
      const room = await Room.findOne({ users: { $in: [user1, user2] }, type: 1 })
      console.log(room)
      if (room) {
        res.status(401).json({
          message: 'You Already Created Room with this User.'
        })
      }
      const currentUser = await User.findById(user1)
      const otherUser = await User.findById(user2).populate('profile').exec()
    const _roomName = req.body.roomName ? req.body.roomName : ''
              const type = req.body.type
              const users = []
              users.push(user1)
              users.push(user2)
    
              const room1 = new Room({
                roomName: _roomName,
                type,
                users
              })
              const resRoom = await room1.save()
              const {roomName, ..._room} = resRoom._doc
              console.log('here');
              res.status(201).json({
                message: 'Successfully Added a Room',
                // room: {
                //   roomName: otherUser.name,
                //   type: _room.type,
                //   users: _room.users
                // }
              })
              return   
    } catch (error) {
      if (!error.statusCode) {
        error.message = 'something wrong happend'
        error.statusCode = 500
      }
      res.status(error.statusCode).json({ message: error.message, error })
    }
  }

  exports.getRooms = async (req, res, next) => {
    try {
      // const rooms = await Room.find({ 'users': req.decoded._id })
      const rooms = await Room.find({ users: { $in: [req.user.id] } })
      
      res.status(200).json({
        message: 'Successfully Fteched Rooms',
        rooms: rooms
      })
    } catch (error) {
      res.status(500).json({
        message: error
      })
    }
  }

  exports.getRoom = async (req, res, next) => {
    try {
      const roomId = req.params.roomId
      const user1 = req.user.id
      const user2 = req.body.userId
      const users = [user1, user2]
      const type = req.body.type
      let room
      if (roomId) {
        room = await Room.findById(roomId).populate('messages').exec()
      } else if (user1 && user2) {
        room = await Room.find({ users, type }).populate('messages').exec()
      } else {
        return res.status(404).json({
          message: 'Somrthing Wrong Happend',
          room
        })
      }
  
      res.status(200).json({
        message: 'Successfully Fteched Room',
        room
      })
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  }