
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#Username-signup').value.trim();
    const email = document.querySelector('#Email-signup').value.trim();
    const first_name = document.querySelector('#First-signup').value.trim();
    const last_name = document.querySelector('#Last-signup').value.trim();
    const address = document.querySelector('#Address-signup').value.trim();
    const phone_number = document.querySelector('#Phone-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log("here");

    if (username && email && first_name && last_name && address && phone_number && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, first_name, last_name, address, phone_number, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  

  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  