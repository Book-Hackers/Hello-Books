document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.status-select').forEach(select => {
      select.addEventListener('change', function() {
        const bookId = this.getAttribute('data-id');
        const newStatus = this.value;
  
        fetch(`/api/books/updateStatus/${bookId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: newStatus }),
        })
        .then(response => {
          if (response.ok) {
            window.location.reload();
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
  
    document.getElementById('post-new-book').addEventListener('click', function() {
      window.location.href = '/api/books/postBook';
    });
  });