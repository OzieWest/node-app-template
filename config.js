/**
 * Created by akolosovich on 15/12/2016.
 */

const argv = require('optimist').argv;

module.exports = {
    port: process.env.NODE_PORT || argv['port'] || 3000,
    env: process.env.NODE_ENV || argv['env'] || 'development'
};
