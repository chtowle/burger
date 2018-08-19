var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectDevouredBurger: function(tableInput,table) {
    var queryString = "SELECT * FROM by devoured===true"
    connection.query(queryString, [tableInput,table], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  selectBurger: function(tableInput,table) {
    var queryString = "SELECT * FROM by devoured===false"
    connection.query(queryString, [tableInput,table], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
};

module.exports = orm;
