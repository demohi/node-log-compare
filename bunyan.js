/**
 * node-log-compare - bunyan.js
 * Created by mds on 15/6/3.
 */

'use strict';
var bunyan = require('bunyan');

var log = bunyan.createLogger({
    name: 'foo',
    streams: [{
        type: 'rotating-file',
        path: 'bunyan/error.log',
        period: '1d',   // daily rotation
        count: 3        // keep 3 back copies
    }]
});

log.error('hello %s %d %j', 'world', 123, {foo: 'bar'}, [1, 2, 3, 4], new Error('bunyan error msg'));
log.error(log);