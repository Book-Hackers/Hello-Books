const User = require('./User');
const Book = require('./Book');
const Transaction = require('./Transaction');
const Cart = require('./Cart');



User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Book.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Transaction, {
  as: 'seller',
  foreignKey: 'seller_id',
  onDelete: 'CASCADE',
});

Transaction.belongsTo(User, {
  as: 'seller',
  foreignKey: 'seller_id',
});

User.hasMany(Transaction, {
  as: 'buyer',
  foreignKey: 'buyer_id',
  onDelete: 'CASCADE',
});

Transaction.belongsTo(User, {
  as: 'buyer',
  foreignKey: 'buyer_id',
});

Book.hasMany(Transaction, {
  foreignKey: 'book_id',
});

Transaction.belongsTo(Book, {
  foreignKey: 'book_id',
});

Cart.hasMany(Book, {
  foreignKey: 'book_id',
});

Book.belongsTo(Cart, {
  foreignKey: 'cart_id',
})

User.hasOne(Cart, {
  foreignKey: 'user_id'
})

Cart.belongsTo(User, {
  foreignKey: 'user_id',
})




module.exports = { User, Book, Transaction, Cart};
