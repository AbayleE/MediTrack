require("dotenv").config();
const app = require("./app")
const connectDb = require("./utils/db")

const port = process.env.Port || 5000;

connectDb().then(() => {
    app.listen(port, () =>
        console.log(`Backend running on port ${port}`));
});