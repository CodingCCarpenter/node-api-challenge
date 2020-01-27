const express = require("express");
const router = express.Router();

//data
const Projects = require("../data/helpers/projectModel.js");

//Middleware
const {validateProject, validateProjectId } = require("../middleware/middleware.js");



module.exports = router;