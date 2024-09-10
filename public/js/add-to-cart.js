document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', async (event) => {
        const bookId = event.target.getAttribute('data-book-id');
        const sellerId = event.target.getAttribute('data-seller-id');
  
        console.log(`Adding book with ID: ${bookId} and seller ID: ${sellerId} to cart.`); // Debugging log
  
        try {
          const response = await fetch('/api/cart/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookId, sellerId }),
          });
          const data = await response.json();
  
          alert(data.message || 'Book added to cart successfully.');
        } catch (error) {
          console.error('Error:', error);
          alert('Error adding book to cart.');
        }
      });
    });
  });