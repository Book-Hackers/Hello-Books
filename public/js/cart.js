// const addToCart = document.getElementsByClassName('add-to-cart')
// const cartHandler = async () => {
//   const book = document.querySelector('.book-container');
//   const title = document.querySelector('#bookTitle')


//   if (title) {
//     const response = await fetch('api/users/cart', {
//       method: 'POST',
//       body: JSON.stringify({ title: title }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     console.log(response)

//     if (response.ok) {
//       document.location.replace('/cart')
//       console.log('worked')
//     } else {
//       console.log('failed')

//     }

//   }
// }

const cartMessage = document.querySelector('.empty-cart');
const books = document.querySelectorAll('.book-in-cart');

const addCartBtns = document.querySelectorAll('.add-to-cart')
const cartLink = document.querySelector('.cart-link');
console.log(books)





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
      // alert(data.message);
    
        alert(data.message)
    
  } catch (error) {
      console.error('Error:', error);
  }
}


// const addCartBtns = document.querySelectorAll('.add-to-cart-btn')
// for (const btn of addCartBtns) {
//   btn.addEventListener('click', (event) => {
//     event.preventDefault()
//     const bookId = btn.getAttribute('data-id')
//     addToCart(bookId);
//   });

// }



for (const btn of addCartBtns) {
  btn.addEventListener('click', (event) => {
    event.preventDefault()
    const bookId = btn.getAttribute('data-id')
    const bookTitle = btn.getAttribute('title')
    addToCart(bookId);
    
  });

// for (const btn of addToCart) {
//     btn.addEventListener('click', () => {
//       cartHandler();
//     })
// }
}



// go to product

const cartBooks = document.querySelectorAll('.viewBookCart');

function goToProduct (book_id) {
  document.location.replace(`/book/${book_id}`)
}

for (const book of cartBooks) {
  book.addEventListener('click', () => {
    const bookId = book.getAttribute('data-id');
    goToProduct(bookId)
  } )
};



// Remove product from cart

async function deleteCart(book_id) {
  try {
    const response = await fetch(`/api/users/cart/remove/${book_id}`, {
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
}

const removeBtns = document.querySelectorAll('.remove-from-cart');
for (const btn of removeBtns) {
  btn.addEventListener('click', async () => {
    const bookId = btn.getAttribute('data-id')
    deleteCart(bookId);
    document.location.reload();
  })
}

// Empty Cart Message

if (books.length === 0) {
 cartMessage.textContent = 'Your cart is empty!';
} else {
 cartMessage.textContent = 'Your Cart';
 cartMessage.setAttribute('style', 'padding: 0px;')
}




// checkout


