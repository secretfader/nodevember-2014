var path    = require('path')
,   express = require('express')
,   sse     = require('connect-sse')
,   zmq     = require('zmq')
,   socket  = zmq.socket('pull')
,   app     = express();

socket.identity = ['downstream', 'quotes', process.pid].join('-');

socket.connect('tcp://127.0.0.1:12345');

app.use(express.static(path.join(__dirname, 'public')));

app.route('/').get(function (req, res) {
  res.send('Hello, Nodevember!');
});

app.route('/ticker')
  .all(sse())
  .get(function (req, res) {
    socket.on('message', function (data) {
      res.json(JSON.parse(data));
    });
  })
app.listen(8000);
