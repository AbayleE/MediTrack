const Medication = require("../models/medication.model");

exports.getAllMedications = async (req, res) => {
    try {
        const meds = await Medication.find();
        res.json(meds);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addMedications = async (req, res) => {
    try {
        const newMed = new Medication(req.body);
        await newMed.save();
        res.status(201).json(newMed);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getMedicationById = async (req, res) => {
    try {
        const { id } = req.params;
        const med = await Medication.findById(id);
        if (!med) {
            return res.status(404).json(`Medication with Id ${id} not found`);
        }
        return res.json(med);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteMedication = async (req, res) => {
    try {
        const { id } = req.params;
        const med = await Medication.findByIdAndDelete(id);

        if (!med) {
            return res.status(404).json(`Medication with Id ${id} not found`);
        }
        return res.json("Medication deleted");


    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
}

exports.updateMedication = async (req, res) => {
    try {
        var { id } = req.params;
        var med = Medication.findByIdAndUpdate(id);
        if (!med) {
            return res.status(404).json(`Medication with Id ${id} not found`);
        }

        return res.json(med)

    } catch {
        return res.status(400).json({ error: err.message });
    }
}

