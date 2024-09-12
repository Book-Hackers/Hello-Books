import { expect } from 'chai';


function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }


const createUser = async () => {

    const username = generateRandomString(4);
    const email = generateRandomString(4) + "@test.com";
    const first_name = generateRandomString(4) ;
    const last_name = generateRandomString(4);
    const address = generateRandomString(4);
    const phone_number = generateRandomString(4);
    const password = generateRandomString(10) ;

    console.log(username);
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, first_name, last_name, address, phone_number, password }),
        headers: { 'Content-Type': 'application/json' },
      });

    if(response.ok){
        return true
    }
    return false
};

describe('Sign Up', function() {
    it('Should take login information and Create a user', function() {
    const ret = createUser();
      expect(ret).to.equal(true);
    });
  
  
  });