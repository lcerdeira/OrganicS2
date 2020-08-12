const EXPRESS = require('express');
const ROUTER  = EXPRESS.Router();

const INDEX_CONTROLLER = require('../controllers/index_controller');

ROUTER.get('/', INDEX_CONTROLLER.index);

module.exports = ROUTER;