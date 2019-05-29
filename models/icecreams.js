// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var icecreams = {
  selectAll: function(cb) {
    orm.selectAll("icecream", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createOne: function(cols, vals, cb) {
    orm.insertOne("icecream", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("icecream", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("icecream", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller icecream_controller.js.
module.exports = icecreams;