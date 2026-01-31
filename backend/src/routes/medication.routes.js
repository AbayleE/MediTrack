const express = require("express")
const router = express.Router();

const controller = require("../controllers/medication.controller");

router.post("/", controller.addMedications);

router.get("/", controller.getAllMedications);
router.get("/:id", controller.getMedicationById);

router.put("/:id", controller.updateMedication);
router.delete("/:id", controller.deleteMedication);

module.exports = router;