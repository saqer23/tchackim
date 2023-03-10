const Notification = require('../model/NotificationModel')

class NotificationController {
    async getUserNotifications(req, res) {
        const userId = req.user.id

        try {
            const notifications = await Notification.find({ userTo: userId }).populate('userTo userFrom')
            for (let i in notifications) {
                notifications[i].read_at = new Date
                await notifications[i].save()
            }
            return {
                notifications: notifications
            }
        } catch (error) {
            console.log(error);
        }
    }
    async send(req, res) {
        const { usersTo, userFrom, entityId, title, message } = req.body
        // if (usersTo instanceof Array) {
        // usersTo.forEach(async (userTo) => {
        //     const notification = {
        //         userTo, userFrom, entityId
        //     }
        //     await Notification.create(notification)
        // })
        //     return {
        //         success: true,
        //         status: 200,
        //         message: 'Notifications have been sent successfully.'
        //     }
        // }

        const notification = { userTo: usersTo, userFrom, entityId, title, message }

        // await this.deleteOne({type: 'follow', usersTo, userFrom, entityId})

        await Notification.create(notification)

        return {
            success: true,
            status: 200,
            message: 'Notification has been sent successfully.'
        }
    }
}
module.exports = new NotificationController()