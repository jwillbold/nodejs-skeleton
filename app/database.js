const Sequelize = require('sequelize');
const path = require('path');
var fs = require('fs');

// Create the database dir if it doesnt exist
var dir = path.join(__dirname, '../private/db');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../private/db/db.sqlite')
});

// Check if the database connection is working
sequelize
  .authenticate()
  .then(() => console.log('Successfully connected to local database'))
  .catch(err => console.error('Failed to connect to local database:', err));


// Init your database here...
// https://sequelize.org/master

module.exports = sequelize;