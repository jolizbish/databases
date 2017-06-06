var db = require('../db');

module.exports = {
  messages: {
    get: function(req, res) {
      db.Message.findAll({include: [db.User]})
      .then(function(messages) {
        res.json(messages);
      });
    },
    post: function(req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
      .spread(function(user, created){
        db.Message.create({userid: user.get('id'), message: req.body.message, roomname: req.body.roomname})
        .then(function(message){
          res.sendStatus(201);
        });
      });
    }
  },

  users: {
    get: function(req, res) {
      db.User.findAll().then(function(users){
        res.json(users);
      });
    },
    post: function(req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
      .spread(function(user, created) {
        res.sendStatus(created ? 201 : 200);
      });
    }
  }
};


// var models = require('../models');
//
// module.exports = {
//   messages: {
//     get: function (req, res) {
//       models.messages.get(function(error, data) {
//         if (error) {
//           throw error;
//         }
//         res.json(data);
//       });
//     }, // a function which handles a get request for all messages
//     post: function (req, res) {
//       var params = [req.body.message, req.body.username, req.body.roomname];
//       models.messages.post(params, function(error, data) {
//         if (error) {
//           throw error;
//         }
//         res.sendStatus(201);
//       });
//     } // a function which handles posting a message to the database
//   },
//
//   users: {
//     // Ditto as above
//     get: function (req, res) {
//       models.users.get(function(error, data) {
//         if (error) {
//           throw error;
//         }
//         res.json(data);
//       });
//     },
//     post: function (req, res) {
//       var params = [req.body.username];
//       models.users.post(params, function(error, data) {
//         if (error) {
//           throw error;
//         }
//         res.sendStatus(201);
//       });
//     }
//   }
// };
