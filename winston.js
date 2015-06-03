/**
 * node-log-compare - winston.js
 * Created by mds on 15/6/3.
 */

'use strict';


/**
 * User access, app run and error log.
 *
 * @module Logger
 */

//import
var fs = require('fs');
var util = require('util');
var winston = require('winston');
//var mkdirp = require('mkdirp');


var logPath = "winston";
//if(!fs.existsSync(logPath)){
//    mkdirp.sync(logPath);
//    //console.log(util.format('Log Path: %s', logPath));
//};

function createLogger(fileName) {
    /*var logger = winston.add(winston.transports.DailyRotateFile, {
     filename: util.format('%s/%s', logPath, fileName),
     datePattern: '-yyyy-MM-dd.log'
     });
     logger.remove(winston.transports.Console);
     return logger;*/

    var logger = new (winston.Logger)({
        transports: [
            new (winston.transports.DailyRotateFile)({
                filename: util.format('%s/%s', logPath, fileName),
                datePattern: '-yyyy-MM-dd.log',
                maxsize: 1024 * 1024 * 10 // 10MB
            })
        ]
    });
    return logger;
}

/**
 * Create an logger.
 *
 * @class Logger
 * @constructor
 */
function Logger() {
    this.appLog = createLogger('app');
    this.errorLog = createLogger('error');
    this.accessLog = createLogger('access');
}

/**
 * Info Logger
 *
 * @method info
 * @param {message}
 *          log info message.
 */
Logger.prototype.info = function (message) {
    this.appLog.info(message);
};

/**
 * Error Logger
 *
 * @method error
 * @param {message}
 *          error message.
 */
Logger.prototype.error = function (message) {
    var msg = '';
    if (typeof(message) == 'string')
        msg = message;
    else if (typeof(message) == 'object') {
        if (typeof(message.toString) == 'function')
            msg = message.toString();
        else
            msg = JSON.stringify(message);
    }
    this.errorLog.error(msg);
};


var logger = new Logger();


logger.error(new Error('winston error log'));
logger.info('hello');
