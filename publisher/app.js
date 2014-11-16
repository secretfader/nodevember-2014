var zmq    = require('zmq');

// Wrapper to setup current IP address.
require('dns').lookup(require('os').hostname(), function (err, ip) {
  if (err) throw err;

  var socket = zmq.socket('push');

  socket.identity = ['upstream', 'quotes', process.pid].join('-');

  socket.bind('tcp://' + ip + ':12345', function (err) {
    if (err) throw err;

    var stocks = ['APPL', 'GOOG', 'FB', 'YHOO'];

    setInterval(function () {
      var symbol = stocks[Math.floor(Math.random() * stocks.length)]
      ,   quote  = (Math.random() * 100.0 + 25.0).toFixed(2);

      socket.send(JSON.stringify({ symbol: symbol, quote: quote }));
    }, 500);
  });
});
// End wrapper.
