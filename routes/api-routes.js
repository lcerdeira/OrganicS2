// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
const EXPRESS = require('express');
const ROUTER  = EXPRESS.Router();
const API_CONTROLLER = require('../controllers/api_controller');

ROUTER.get('/', API_CONTROLLER.total);
ROUTER.post('/burgers', API_CONTROLLER.new);
ROUTER.delete("/burgers/:id", API_CONTROLLER.destroy);
ROUTER.put("/burgers/:id", API_CONTROLLER.change);
ROUTER.put("/burgers/nameChange/:id", API_CONTROLLER.nameChange);
module.exports = ROUTER;
