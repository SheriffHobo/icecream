var express = require("express");
var orm = require("../config/orm.js");

var router = express.Router();

// Import the model to use its database functions.
var icecream = require("../models/icecreams.js");
// console.dir(icecream);

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.dir(icecream);
  icecream.selectAll(function(data) {
    var hbsObject = {
      icecream: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/icecreams", function(req, res) {
  console.log(req.body);
  icecream.createOne([
    "name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.post("/api/icecreams/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  icecream.updateOne( {
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/icecreams/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  icecream.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
