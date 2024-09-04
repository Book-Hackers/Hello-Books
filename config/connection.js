const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  // Parse the URL for SSL options if necessary
  const url = new URL(process.env.DB_URL);
  sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Set to true if you have a valid certificate
      }
    }
  });
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