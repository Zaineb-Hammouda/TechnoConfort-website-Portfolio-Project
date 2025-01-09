document.addEventListener("DOMContentLoaded", () => {
  console.log("Login page loaded");

  const loginForm = document.getElementById("login-form");

  // Handle form submission
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("remember-me").checked;

    if (username && password) {
      alert(`Logged in as ${username}\nRemember Me: ${rememberMe}`);
    } else {
      alert("Please fill in all fields.");
    }
  });
});