var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT messages.id, messages.message, messages.roomname, users.username FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id) ORDER BY messages.id DESC', function(error, results) {
        callback(error, results);
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      var queryString = `INSERT INTO messages (message, userid, roomname) VALUE (?, (SELECT id FROM users WHERE username = ? limit 1), ?)`;
      // var queryArgs = [`${data.message}, ${data.username}, ${data.roomname}`];
      db.query(queryString, data, function(error, results) {
        callback(error, results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', function (error, results) { // need to figure out what a get request here does
        callback(error, results);
      });
    },
    post: function (data, callback) {
      var queryString = `INSERT INTO users(username) VALUES (?)`;
      // var queryArgs = [`${data.username}`];
      db.query(queryString, data, function(error, results) {
        callback(error, results);
      });
    }
  }
}
