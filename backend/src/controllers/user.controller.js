const User = require("../models/user.model");

/* CREATE User */
exports.addUser = async (req, res) => {
    try {
        const user = new User(req.Body);
        await user.save();

        res.Status(201).json(user);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

/*Delete User by Id */

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/*Update User by Id */

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

/*Get All users */
exports.getAllUser = async (req, res) => {

    const users = User.find();
    res.json(users);
};

