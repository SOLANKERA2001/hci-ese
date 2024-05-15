document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here
    document.getElementById('loginSuccess').classList.remove('d-none');
    setTimeout(function() {
        window.location.href = 'welcome.html';
    }, 2000); // Redirect to welcome page after 2 seconds
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your sign-up logic here
    document.getElementById('signUpSuccess').classList.remove('d-none');
    setTimeout(function(){
        window.location.href = 'welcome.html';
    }, 2000); // Redirect to welcome page after 2 seconds
});
