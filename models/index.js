const User = require('./User');
const Book = require('./Book');
const Transaction = require('./Transaction');

User.hasMany(Book, {
  foreignKey: 'user_id'
})

Book.belongsTo(User, {
  foreignKey: 'user_id'
})


// User.hasMany(Book, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Book.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// User.hasMany(Transaction, {
//   as: 'seller',
//   foreignKey: 'seller_id',
//   onDelete: 'CASCADE',
// });

// Transaction.belongsTo(User, {
//   as: 'seller',
//   foreignKey: 'seller_id',
// });

// User.hasMany(Transaction, {
//   as: 'buyer',
//   foreignKey: 'buyer_id',
//   onDelete: 'CASCADE',
// });

// Transaction.belongsTo(User, {
//   as: 'buyer',
//   foreignKey: 'buyer_id',
// });

// Book.hasMany(Transaction, {
//   foreignKey: 'book_id',
// });

// Transaction.belongsTo(Book, {
//   foreignKey: 'book_id',
// });


module.exports = { User, Book, Transaction};
