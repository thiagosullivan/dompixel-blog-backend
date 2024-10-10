const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const authRoutes = require("./routes/auth.js");

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

/* ROUTES */
app.use("/auth", authRoutes)

/* MONGOOSE SETUP */
const PORT = 3111;
mongoose.connect(process.env.MONGO_URL, {
    dbName: "DomPixel_blog",
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch((err) => console.log(`${err} did not connect`))

