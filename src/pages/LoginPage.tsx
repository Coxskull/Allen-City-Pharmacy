<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Allen City Pharmacy | Login</title>
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

    .login-container {
      background: rgba(255, 255, 255, 0.95);
      border-radius: 16px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      padding: 40px 35px;
      width: 100%;
      max-width: 400px;
      text-align: center;
      backdrop-filter: blur(10px);
      animation: fadeIn 1s ease forwards;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .login-container img {
      width: 120px;
      margin-bottom: 15px;
    }

    .login-container h2 {
      color: #004d40;
      font-weight: 600;
      margin-bottom: 25px;
      font-size: 1.6rem;
    }

    .form-group {
      margin-bottom: 20px;
      text-align: left;
    }

    label {
      font-weight: 500;
      color: #004d40;
      font-size: 0.9rem;
    }

    input[type="text"], input[type="password"] {
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

    .btn-login {
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

    .btn-login:hover {
      background-color: #004d40;
      transform: scale(1.02);
    }

    .forgot-password {
      margin-top: 15px;
      display: block;
      color: #00796b;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .forgot-password:hover {
      color: #004d40;
    }

    .footer-text {
      margin-top: 25px;
      font-size: 0.8rem;
      color: #555;
    }

    @media (max-width: 480px) {
      .login-container {
        padding: 30px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="login-container">
    <img src="Logo1.png" alt="Allen City Pharmacy Logo">
    <h2>Welcome Back</h2>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required>
      </div>

      <button type="submit" class="btn-login">Login</button>
      <a href="#" class="forgot-password">Forgot your password?</a>
    </form>
    <p class="footer-text">© 2025 Allen City Pharmacy. All rights reserved.</p>
  </div>
</body>
</html>