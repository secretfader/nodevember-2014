var path = require('path')
,   db   = module.exports = require('mongoose');

['user', 'post'].forEach(function (model) {
  require(path.join(__dirname, 'lib', model));
});
