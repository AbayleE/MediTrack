const mongoose = require("mongoose");
const notificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    medication: { type: mongoose.Schema.Types.ObjectId, ref: "Medication" },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    sentAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", notificationSchema);
