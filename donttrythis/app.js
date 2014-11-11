var express = require('express')
,   api     = express()
,   web     = express()
,   server  = express();

server.use('/', web);
server.use('/api', api);

server.listen(8000);
