  
  const usernameInput = document.getElementById('Username-signup');
  const usernameErrorMessage = document.getElementById('username-error');

  const emailInput = document.getElementById('Email-signup');
  const emailErrorMessage = document.getElementById('email-error');
  
  const firstNameInput = document.getElementById('First-signup');
  const firstNameErrorMessage = document.getElementById('firstName-error');
  
  const lastNameInput = document.getElementById('Last-signup');
  const lastNameErrorMessage = document.getElementById('lastName-error');
  
  const AddressInput = document.getElementById('Address-signup');
  const AddressErrorMessage = document.getElementById('Address-error');
  
  const PhoneInput = document.getElementById('Phone-signup');
  const PhoneErrorMessage = document.getElementById('Phone-error');
  
  const passwordInput = document.getElementById('password-signup');
  const passwordErrorMessage = document.getElementById('password-error');
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#Username-signup').value.trim();
    const email = document.querySelector('#Email-signup').value.trim();
    const first_name = document.querySelector('#First-signup').value.trim();
    const last_name = document.querySelector('#Last-signup').value.trim();
    const address = document.querySelector('#Address-signup').value.trim();
    const phone_number = document.querySelector('#Phone-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && first_name && last_name && address && phone_number && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, first_name, last_name, address, phone_number, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        passwordInput.value = '';
        passwordInput.style.borderColor = 'red';
        passwordErrorMessage.textContent = 'Password is Required';
      }
    }else{

      if(!username){
        usernameInput.value = '';
        usernameInput.style.borderColor = 'red';
        usernameErrorMessage.textContent = 'Username is Required';
      }
      if(!email){
        emailInput.value = '';
        emailInput.style.borderColor = 'red';
        emailErrorMessage.textContent = 'Email is Required';
      }
      if(!password){
        passwordInput.value = '';
        passwordInput.style.borderColor = 'red';
        passwordErrorMessage.textContent = 'Password is Required';
      }
      if(!first_name){
        firstNameInput.value = '';
        firstNameInput.style.borderColor = 'red';
        firstNameErrorMessage.textContent = 'First Name is Required';
      }
      if(!last_name){
        lastNameInput.value = '';
        lastNameInput.style.borderColor = 'red';
        lastNameErrorMessage.textContent = 'Last Name is Required';
      }

      if(!address){
        AddressInput.value = '';
        AddressInput.style.borderColor = 'red';
        AddressErrorMessage.textContent = 'Address is Required';
      }
      if(!phone_number){
        PhoneInput.value = '';
        PhoneInput.style.borderColor = 'red';
        PhoneErrorMessage.textContent = 'Phone is Required';
      }
    }
  };
  
  usernameInput.addEventListener('input', () => {
    usernameInput.classList.remove('input-error');
    usernameErrorMessage.textContent = '';
    usernameInput.style.borderColor = 'black';
  });

  emailInput.addEventListener('input', () => {
    emailInput.classList.remove('input-error');
    emailErrorMessage.textContent = '';
    emailInput.style.borderColor = 'black';
  });

  firstNameInput.addEventListener('input', () => {
    firstNameInput.classList.remove('input-error');
    firstNameErrorMessage.textContent = '';
    firstNameInput.style.borderColor = 'black';
  });

  lastNameInput.addEventListener('input', () => {
    lastNameInput.classList.remove('input-error');
    lastNameErrorMessage.textContent = '';
    lastNameInput.style.borderColor = 'black';
  });

  AddressInput.addEventListener('input', () => {
    AddressInput.classList.remove('input-error');
    AddressErrorMessage.textContent = '';
    AddressInput.style.borderColor = 'black';
  });

  PhoneInput.addEventListener('input', () => {
    PhoneInput.classList.remove('input-error');
    PhoneErrorMessage.textContent = '';
    PhoneInput.style.borderColor = 'black';
  });

  passwordInput.addEventListener('input', () => {
    passwordInput.classList.remove('input-error');
    passwordErrorMessage.textContent = '';
    passwordInput.style.borderColor = 'black';
  });


  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  