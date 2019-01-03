var util = require("util");

var APIError = function(name, message, status, requestInfo, originalError) {
  this.name =
    name || this.constructor.name || this.constructor.prototype.name || "";
  this.message = message || "";
  this.statusCode = status || (originalError && originalError.code);
  this.requestInfo = Object.assign({}, requestInfo);
  this.originalError = originalError;
};

util.inherits(APIError, Error);

module.exports = APIError;
