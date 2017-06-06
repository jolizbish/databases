var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(error, data) {
        if (error) {
          throw error;
        }
        res.json(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var params = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(params, function(error, data) {
        if (error) {
          throw error;
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(error, data) {
        if (error) {
          throw error;
        }
        res.json(data);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(error, data) {
        if (error) {
          throw error;
        }
        res.sendStatus(201);
      });
    }
  }
};
