async function addToCart(book_id) {
  console.log(book_id)
  try {
      const response = await fetch('/api/users/cart/add', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ book_id: book_id }),
      });

      const data = await response.json();
      console.log(data)
      alert(data.message);
  } catch (error) {
      console.error('Error:', error);
  }
}

// Attach this function to your "Add to Cart" button
const addCartBtns = document.querySelectorAll('.add-to-cart')

for (const btn of addCartBtns) {
  btn.addEventListener('click', (event) => {
    event.preventDefault()
    const bookId = btn.getAttribute('data-id')
    addToCart(bookId);
  });

}


// go to product

const cartBooks = document.querySelectorAll('.book-in-cart');

for (const book of cartBooks) {
  book.addEventListener('click', () => {
    const bookId = book.getAttribute('data-id');
    document.location.replace(`/book/${bookId}`)
  } )
};



// Remove product from cart

async function deleteCart(book_id) {
  try {
    const response = await fetch('/api/users/cart/remove', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();
    console.log(data)
    alert(data.message);
} catch (error) {
    console.error('Error:', error);
}
}

const removeBtns = document.querySelectorAll('.remove-from-cart');
for (const btn of removeBtns) {
  btn.addEventListener('click', async () => {
    const bookId = btn.getAttribute('data-id')
    deleteCart(bookId);
  })
}


// checkout

