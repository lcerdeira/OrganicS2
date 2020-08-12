module.exports = function(APP){

    const INDEX = require('./routes/index');
   const API = require('./routes/api-routes');

    APP.use('/', INDEX);
   APP.use('/api', API);
};