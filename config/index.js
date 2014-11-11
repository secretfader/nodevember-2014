var dotaccess = require('dotaccess')
,   Config    = function () {};

Config.prototype.configure = function (options) {
  this.options = options;
};

Config.prototype.get = function (accessor) {
  if (dotaccess.get(this.options, accessor)) {
    return dotaccess.get(this.options, accessor);
  } else { return null; }
};

module.exports = new Config();
