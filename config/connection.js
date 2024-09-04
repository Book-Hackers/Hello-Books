const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'postgres',
      // dialectOptions: {
      //   ssl: {
      //     require: true,
      //     rejectUnauthorized: false // or true if you have a valid certificate
      //   }
      
    // }
  }
  );
}

module.exports = sequelize;