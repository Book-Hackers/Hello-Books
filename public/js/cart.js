<<<<<<< message
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
=======
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
>>>>>>> dev

// Attach this function to your "Add to Cart" button
const addCartBtns = document.querySelectorAll('.add-to-cart')

for (const btn of addCartBtns) {
  btn.addEventListener('click', (event) => {
    event.preventDefault()
    const bookId = btn.getAttribute('data-id')
    addToCart(bookId);
  });

<<<<<<< message
// for (const btn of addToCart) {
//     btn.addEventListener('click', () => {
//       cartHandler();
//     })
// }
=======
}
>>>>>>> dev
