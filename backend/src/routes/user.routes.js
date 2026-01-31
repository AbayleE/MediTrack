const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");

// CREATE user
router.post("/", controller.addUser);

// READ users
router.get("/", controller.getAllUser);
router.get("/:id", controller.getUserById);

// UPDATE user
router.put("/:id", controller.updateUser);

// DELETE user
router.delete("/:id", controller.deleteUser);

module.exports = router;
