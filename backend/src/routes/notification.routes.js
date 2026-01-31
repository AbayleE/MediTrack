const express = require("express");
const router = express.Router();

const controller = require("../controllers/notification.controller");

router.post("/", controller.sendNotification);

router.get("/user/:userId", controller.getUserNotifications);

router.patch("/:id/read", controller.markNotificationAsRead);

router.delete("/:id", controller.deleteNotification);

module.exports = router;