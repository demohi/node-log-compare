/**
 * node-log-compare - tracer.js
 * Created by mds on 15/6/3.
 */

'use strict';

var logger = require('tracer').dailyfile({root: './tracer'});

logger.log('hello');
logger.trace('hello', 'world');
logger.debug('hello %s', 'world', 123);
logger.info('hello %s %d', 'world', 123, {foo: 'bar'});
logger.warn('hello %s %d %j', 'world', 123, {foo: 'bar'});
logger.error(new Error('tracer error msg'));

logger.error('127.0.0.1', 'sdjf;lasdkfl;asdfjl;aslkdf;a', new Error('tracer error'), logger)