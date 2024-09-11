const User = require('./User');
const Book = require('./Book');
const Transaction = require('./Transaction');
const Cart = require('./Cart');
const CartItem = require('./CartItem');



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


User.hasOne(Cart, {
  foreignKey: 'user_id'
})

Cart.belongsTo(User, {
  foreignKey: 'user_id',
})

Cart.belongsToMany(Book, {
  through: CartItem,
  foreignKey: 'cart_id',
  uniqueKey: false

})

Book.belongsToMany(Cart, {
  through: CartItem,
  foreignKey: 'book_id',
  uniqueKey: false
})



module.exports = { User, Book, Transaction, Cart, CartItem};
