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


// for (const btn of addToCart) {
//     btn.addEventListener('click', () => {
//       cartHandler();
//     })
// }