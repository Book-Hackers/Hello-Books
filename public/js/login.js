
const passwordInput = document.getElementById('password-login');
const errorMessage = document.getElementById('password-error');

const emailInput = document.getElementById('email-login');
const emailMessage = document.getElementById('email-error');


const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email: email, password: password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {

      passwordInput.value = '';
      passwordInput.style.borderColor = 'red';
      errorMessage.textContent = 'Incorrect Username or Password';

    }
  }else{
    if(!email){
      
      emailInput.value = '';
      emailInput.style.borderColor = 'red';
      emailMessage.textContent = 'Email is Required';
    }
    if(!password){
      passwordInput.value = '';
      passwordInput.style.borderColor = 'red';
      errorMessage.textContent = 'Password is Required';
    }

  }
};

passwordInput.addEventListener('input', () => {
  passwordInput.classList.remove('input-error');
  errorMessage.textContent = '';
  passwordInput.style.borderColor = 'black';
});

emailInput.addEventListener('input', () => {
  emailInput.classList.remove('input-error');
  emailMessage.textContent = '';
  emailInput.style.borderColor = 'black';
});

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

