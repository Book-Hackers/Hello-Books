document.querySelectorAll('.status-select').forEach(select => {
    select.addEventListener('change', function() {
      const bookId = this.getAttribute('data-id');
      const newStatus = this.value;
      const selectElement = this;
      const bookContainer = selectElement.closest('.book-container');
  
      fetch(`/api/books/updateStatus/${bookId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      })
      .then(response => {
        if (response.ok) {
          console.log(newStatus);
          moveBookToNewSection(bookContainer, newStatus);
          alert('Status updated successfully.');
        } else {
          alert('Failed to update status.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while updating the status.');
      });
    });
  });
  
  function moveBookToNewSection(bookContainer, newStatus) {
    const sections = {
      'active': document.querySelector('.books-for-sale'),
      'pending': document.querySelector('.books-pending'),
      'sold': document.querySelector('.books-sold')
    };

    bookContainer.remove();
  
   
    if (sections[newStatus]) {
      sections[newStatus].appendChild(bookContainer);
    }
  }
  
  document.getElementById('post-new-book').addEventListener('click', function() {
    window.location.href = '/api/books/postBook';
  });