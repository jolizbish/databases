var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'student', 'student');

var User = db.define('User', {
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  message: Sequelize.STRING,
  roomname: Sequelize.STRING
});

Message.belongsTo(User);

User.hasMany(Message);

User.sync();
Message.sync();

exports.user = User;
exports.message = Message;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'student',
//   password : 'student',
//   database : 'chat'
// });
//
// connection.connect()
//
// module.exports = connection;
