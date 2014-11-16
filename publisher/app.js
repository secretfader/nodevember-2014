var zmq    = require('zmq')
,   socket = zmq.socket('push')
,   ip     = '10.200.221.29';

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
