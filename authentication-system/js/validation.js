

function validateForm() {
    let userName = document.forms['regForm']['username'].value.trim();
    let email = document.forms['regForm']['email'].value.trim();
    let confirmEmail = document.forms['regForm']['confirmEmail'].value.trim();
    let password = document.forms['regForm']['password'].value.trim();
    let confirmPassword = document.forms['regForm']['confirmPassword'].value.trim();

    if (userName == '') {
        alert('Username cannot be empty');
        return false;
    }
    else if (email == '') {
        alert('Email can not be empty!');
        return false;
    }
    else if (confirmEmail !== email) {
        alert('Emails do not match!');
        return false;
    }
    else if (password.length < 6) {
        alert('Password cannot be less than 6 characters')
        return false;
    }
    else if (password == '') {
        alert('Password can not be empty!');
        return false;
    }
    else if (confirmPassword == '') {
        alert('Confirm password text box can not be empty!');
        return false;
    }
    else if (confirmPassword !== password) {
        alert('Passwords do not match');
        return false;
    }
    else {
        return true;
    }
    
}