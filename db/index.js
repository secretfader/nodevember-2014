var path = require('path')
,   db   = module.exports = require('mongoose');

['stock', 'quote'].forEach(function (model) {
  require(path.join(__dirname, 'lib', model));
});
