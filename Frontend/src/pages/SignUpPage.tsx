<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Allen City Pharmacy | Sign Up</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
    }

    body {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(-45deg, #00796b, #26a69a, #ff7043, #fbc02d);
      background-size: 400% 400%;
      animation: gradient 10s ease infinite;
    }

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .signup-container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 16px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      padding: 40px 35px;
      width: 100%;
      max-width: 420px;
      text-align: center;
      backdrop-filter: blur(10px);
      animation: fadeIn 1s ease forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .signup-container img {
      width: 120px;
      margin-bottom: 15px;
    }

    .signup-container h2 {
      color: #004d40;
      font-weight: 600;
      margin-bottom: 25px;
      font-size: 1.6rem;
    }

    .form-group {
      margin-bottom: 18px;
      text-align: left;
    }

    label {
      font-weight: 500;
      color: #004d40;
      font-size: 0.9rem;
    }

    input[type="text"], input[type="email"], input[type="password"] {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-top: 8px;
      transition: border-color 0.3s ease;
    }

    input:focus {
      outline: none;
      border-color: #00796b;
    }

    .btn-signup {
      width: 100%;
      background-color: #00796b;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-top: 10px;
    }

    .btn-signup:hover {
      background-color: #004d40;
      transform: scale(1.02);
    }

    .login-link {
      margin-top: 15px;
      display: block;
      color: #00796b;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .login-link:hover {
      color: #004d40;
    }

    .footer-text {
      margin-top: 25px;
      font-size: 0.8rem;
      color: #555;
    }

    @media (max-width: 480px) {
      .signup-container {
        padding: 30px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="signup-container">
    <img src="Logo1.png" alt="Allen City Pharmacy Logo">
    <h2>Create Your Account</h2>
    <form>
      <div class="form-group">
        <label for="fullname">Full Name</label>
        <input type="text" id="fullname" name="fullname" placeholder="Enter your full name" required>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required>
      </div>

      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Choose a username" required>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required>
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Re-enter your password" required>
      </div>

      <button type="submit" class="btn-signup">Create Account</button>
      <a href="allen_city_pharmacy_login.html" class="login-link">Already have an account? Login</a>
    </form>
    <p class="footer-text">© 2025 Allen City Pharmacy. All rights reserved.</p>
  </div>
</body>
</html>