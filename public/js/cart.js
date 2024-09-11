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
const btn = document.getElementById('add-to-cart')
btn.addEventListener('click', (event) => {
  event.preventDefault()
  const bookId = btn.getAttribute('data-id')
  addToCart(bookId);
});