document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Retrieve user data from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const storedUser = users.find(
      (user) => user.username === username && user.password === sha256(password)
    );

    if (storedUser) {
      alert(`Welcome, ${username}! Redirecting to homepage...`);
      window.location.href = "index.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});