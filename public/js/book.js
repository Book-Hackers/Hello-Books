
const newBookFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const author = document.querySelector('#author').value.trim();
    const genre = document.querySelector('#genre').value.trim();
    const isbn = document.querySelector('#isbn').value.trim();
    const condition = document.querySelector('#condition').value.trim();
    const price = document.querySelector('#price').value.trim();
    const description = document.querySelector('#description').value.trim();
  
    if (title && author && genre && isbn && condition && price && description) {
      const response = await fetch(`/api/books`, {
        method: 'POST',
        body: JSON.stringify({title: title, author: author, genre: genre, isbn: isbn, condition: condition, price: price, description: description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/api/books/sellerpage');
      } else {
        // alert('Failed to post book');
        console.log("Failed to post book")
      }
    }
  };

  
  document
    .querySelector('#post-book-form')
    .addEventListener('submit', newBookFormHandler);
  
  