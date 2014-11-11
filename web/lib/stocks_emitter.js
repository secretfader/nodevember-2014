var events = require('events')
,   util   = require('util')
,   StocksEmitter;

StocksEmitter = function () {
  events.EventEmitter.call(this);
};

util.inherits(StocksEmitter, events.EventEmitter);

StocksEmitter.prototype.write = function (data) {
  var output = (Buffer.isBuffer(data) ? data.toString() : data);
  this.emit('data', output);
};

module.exports = new StocksEmitter();
