CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(30),  --COME BACK TO THIS AND FIGURE OUT JOIN TABLE
  message VARCHAR(140),
  roomname VARCHAR(30),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (

  id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(30),
  PRIMARY KEY(id)

)


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
