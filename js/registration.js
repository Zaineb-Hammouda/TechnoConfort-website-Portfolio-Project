document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("register-form");

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Validate password match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Use a simple hashing function (replace `sha256` with your hashing library or logic)
    const hashedPassword = sha256(password);

    // Retrieve users from localStorage or initialize an empty array
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(
      (user) => user.username === username || user.email === email
    );

    if (existingUser) {
      alert("Username or email already exists.");
    } else {
      // Add the new user to local storage
      users.push({ username, email, password: hashedPassword });
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful! Redirecting to homepage...");

      // Redirect to index.html
      window.location.href = "index.html";
    }
  });
});
