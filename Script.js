document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
  
    if (signupForm) {
      signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;
  
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
  
        const user = {
          username: username,
          password: password,
        };
  
        localStorage.setItem('user', JSON.stringify(user));
        alert('Sign up successful');
        signupForm.reset();
        window.location.href = 'login.html';
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
  
        const user = JSON.parse(localStorage.getItem('user'));
  
        if (user && user.username === username && user.password === password) {
          alert('Login successful');
          // Redirect to home page
          window.location.href = 'home.html';
        } else {
          alert('Invalid username or password');
        }
  
        loginForm.reset();
      });
    }
  });
  