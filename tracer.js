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
logger.error('hello %s %d %j %j %j', 'world', 123, {foo: 'bar'}, [1, 2, 3, 4], new Error('tracer error msg'));