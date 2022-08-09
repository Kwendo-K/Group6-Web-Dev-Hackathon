//validating login form
function validateLoginForm() {
    let loginUsername = document.forms['loginForm']['loginUsername'].value;
    let loginPassword = document.forms['loginForm']['loginPassword'].value;

    if (loginUsername !== username && loginPassword !== password) {
        alert('Username not found');
        return false;
    }
    return true;
}

function loginRedirect() {
    window.location.href('../html/login.html');
}

//redirection function
function welcomePageRedirect() {
    window.location.href('../html/welcome.html');
}
setTimeout(pageRedirect());