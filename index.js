document.getElementById('submit-button').addEventListener('click', function(){
    const emailInput = document.getElementById('email-input');
    const emailText = emailInput.value;
    emailInput.value = '';

    const passInput = document.getElementById('pass-input');
    const passText = passInput.value;
    passInput.value = '';

    if(emailText == 'sheikdidar67@gmail.com' && passText == 'sahidul89'){
        window.location.href = 'banking.html';
    }
    else{
        onclick=alert('your email and password is incorrect');
    }
})