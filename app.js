const express = require('express');
const catRouter = require('./src/routes/catRoutes')

const app = express();

app.use(express.json())

app.use("/api/v1/cats", catRouter);

module.exports = app;