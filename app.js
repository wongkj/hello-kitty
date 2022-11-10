const express = require('express');
const catRouter = require('./src/routes/catRoutes')

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h2>Hello Kitty API</h2>");
})

app.use("/api/v1/cats", catRouter);

module.exports = app;