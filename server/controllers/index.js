var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(null, function(error, data) {
        if (error) {
          throw error;
        } else {
          console.log(data);
          res.send(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('POSTING MESSAGE CONTROLLER', req.query);
      models.messages.post(req.query, function(error, data) {
        if (error) {
          throw error;
        }
        res.json(data);
      });
    } // a function which handles posting a message to the database
  },

  // users: {
  //   // Ditto as above
  //   get: function (req, res) {
  //     models.users.get(null, function(error, data) {
  //       if (error) {
  //         throw error;
  //       } else {
  //         res.send(data);
  //       }
  //     });
  //   },
  //   post: function (req, res) {
  //     models.users.post(req.query, function(error, data) {
  //       if (error) {
  //         throw error;
  //       }
  //       res.json(data);
  //     })
  //   }
  // }
};
