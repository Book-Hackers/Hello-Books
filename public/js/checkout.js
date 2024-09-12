document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.checkout-btn');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
      const bookId = event.target.getAttribute('data-book-id');
      const sellerId = event.target.getAttribute('data-seller-id');
      
      try {
        const response = await fetch('/api/checkout/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bookId, sellerId }),
        });

        const data = await response.json();  


        if (response.ok) {
          alert('Checkout successfully.');
        } else {
          console.error('Response Error:', data); 
          alert('Error checking out.');
        }
      } catch (error) {
        console.error('Fetch Error:', error); 
        alert('Error checking out.');
      }

      try {
        const response = await fetch(`/api/users/cart/remove`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        const data = await response.json();
        console.log(data)
        // alert(data.message);
    } catch (error) {
        console.error('Error:', error);
    }
    });
  });
});

