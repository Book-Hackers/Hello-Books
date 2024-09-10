document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', async (event) => {
        const bookId = event.target.getAttribute('data-book-id');
        const sellerId = event.target.getAttribute('data-seller-id');
        
        try {
          const response = await fetch('/api/cart/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bookId, sellerId }),
          });
  
          const data = await response.json();  
  
  
          if (response.ok) {
            alert('Book added to cart.');
          } else {
            console.error('Response Error:', data); 
            alert('Error adding book to cart.');
          }
        } catch (error) {
          console.error('Fetch Error:', error); 
          alert('Error adding book to cart.');
        }
      });
    });
  });