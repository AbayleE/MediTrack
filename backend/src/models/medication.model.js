const mongoose = require("mongoose");

const medicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    frequency: { type: String, enum: ["Daily", "Weekly", "Monthly"], required: true },
    notes: { type: String },
    missedDays: [{ type: Date }]
});

module.exports = mongoose.model("Medication", medicationSchema);
