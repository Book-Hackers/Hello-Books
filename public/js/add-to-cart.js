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
  
          console.log("Response status:", response.status);  
          console.log("Response body:", data);               
  
          if (response.ok) {
            alert(data.message); 
          } else {
            alert('Failed to add book to cart: ' + data.error);
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Error adding book to cart.');
        }
      });
    });
  });