var db = require('../db');

module.exports = {
  messages: {
    get: function (options, callback) {
      db.query('SELECT * FROM messages', function(error, results) {
        if (error) {
          callback(error);
          return;
        }
        callback(null, results);
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      var queryString = `INSERT INTO messages (message, username, roomname) VALUES (?, ?, ?)`;
      var queryArgs = [`${data.message}, ${data.username}, ${data.roomname}`];
      db.query(queryString, queryArgs, function(error, results) {
        if (error) {
          callback(error);
          return;
        }
        callback(null, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    // get: function (options, callback) {
    //   db.query('SELECT * FROM users', function (error, results) { // need to figure out what a get request here does
    //     if (error) {
    //       callback(error);
    //       return;
    //     }
    //     callback(null, results);
    //   });
    // },
    // post: function (data, callback) {
    //   var queryString = `INSERT INTO users (username) VALUES (?)`;
    //   var queryArgs = [`${data.username}`];
    //   db.query(queryString, queryArgs, function(error, results) {
    //     if (error) {
    //       callback(error);
    //       return;
    //     }
    //     callback(null, results);
    //   });
    // }
  }
}
