const Notification = require("../models/notification.model");


exports.sendNotification = async (req, res) => {
    try {
        const notification = new Notification(req.Body);
        await notification.save();
        res.Status(201).json(user);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.getUserNotifications = async (req, res) => {
    const { userId } = req.params;

    const notification = await Notification.find({ user: userId });
    res.json(notification);
}


exports.markNotifciationAsRead = async (req, res) => {
    const { id } = req.params;
    const notification = await Notification.findByIdAndUpdate(id);
    if (!notification) {
        return res.status(404).json()
    }
}

