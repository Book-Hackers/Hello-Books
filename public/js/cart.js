const addToCart = document.getElementsByClassName('add-to-cart')
const cartHandler = async () => {
  
  
    // Collect values from the login form
    const title = document.querySelector('#bookTitle');
    const author = document.querySelector('#bookAuthor')
    if (title && author) {
        const response = await fetch(`/api/cart`, {
          method: 'POST',
          body: JSON.stringify({title: title, author: author}),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
            console.log(response)
        } else {
          console.log('failed');
        }
      }
    };

    for (const btn of addToCart) {
        btn.addEventListener('click', () => {
            console.log('click')
            cartHandler()
        })
    }

  const cartNav = document.querySelector('.cart-link');

  cartNav.addEventListener('click', () => {
    
  })