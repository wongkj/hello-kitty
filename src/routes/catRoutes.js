const express = require("express")

const catController = require("../controllers/catController")

const router = express.Router()

router
    .route("/")
    .get(catController.getCats)
    
module.exports = router;
