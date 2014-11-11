var path    = require('path')
,   express = require('express')
,   sse     = require('connect-sse')
,   zmq     = require('zmq')
,   db      = require('../db')
,   emitter = require('./lib/stocks_emitter')
,   socket  = zmq.socket('pull')
,   app     = express()

/**
 * Connect to MongoDB
 */
db.connect('mongodb://localhost/nodevember_2014');

/**
 * Log incoming data from the publisher.
 */
var Stock = db.model('Stock')
,   Quote = db.model('Quote');

emitter.on('data', function (data) {
  data = JSON.parse(data);
  // .....
});

/**
 * Setup 0MQ
 */
socket.identity = ['downstream', 'quotes', process.pid].join('-');
socket.connect('tcp://127.0.0.1:12345');
socket.on('message', function (data) {
  emitter.write(data);
});

/**
 * Configure HTTP Middleware
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * HTTP Routes
 */
app.route('/').get(function (req, res) {
  res.send('Hello, Nodevember!');
});

app.route('/ticker')
  .all(sse())
  .get(function (req, res) {
    emitter.on('data', function (data) {
      res.json(JSON.parse(data));
    })
  });

/**
 * Boot the HTTP server
 */
app.listen(8000);
