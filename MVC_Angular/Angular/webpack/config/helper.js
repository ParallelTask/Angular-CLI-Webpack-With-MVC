/** 
 * helper functions useful in webpack compilation process
 */
var path = require('path');
var start = require('./start');

var constants = {
    prod: 'PRODUCTION',
    uat: 'UAT',
    dev: 'DEV'
}

var environment = {
    isProd: function () {
        return process.env.ENV_SERVER === constants.prod ? true : false;
    },
    isUAT: function () {
        return process.env.ENV_SERVER === constants.uat ? true : false;
    },
    isDev: function () {
        return (environment.isProd() && environment.isUAT()) === false;
    }
}

/*
 * returns root directory of project
 */
function basedir() {
    return path.join(__dirname, '../');
}

/*
 * resolves the given path or file from root path
 */
function resolveRoot(_path) {
    return path.join(basedir(), _path);
}

module.exports = {
    basedir: basedir,
    resolveRoot: resolveRoot,
    PROD: environment.isProd(),
    UAT: environment.isUAT(),
    DEV: environment.isDev()
}