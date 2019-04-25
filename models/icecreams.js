var orm = require('../config/orm.js');

// Create the icecream object
var icecreams = {
  // Select all icecream table entries
  selectAll: function(cb) {
    orm.selectAll('icecream', function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays
  insertOne: function(cols, vals, cb) {
    orm.insertOne('icecream', cols, vals, function(res) {
      cb(res);
    });
  },

  // The objColVals is an object specifying columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('icecream', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (icecream_Controller.js).
module.exports = icecreams;