// step-1:add event listener with the submit button

document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get the email address inside the input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // Do not verify email and password on the client side
    // step -4: Password and gmail verification
    if(email === 'sontam@baap.com' && password === 'secret'){
        window.location.href='bank.html';
    }
    else{
        alert('Invalid user');
    }
    
})