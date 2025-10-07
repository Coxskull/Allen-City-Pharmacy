💊 Allen City Pharmacy Frontend

This project is the frontend of the Allen City Pharmacy Management System, built with React + Vite.
It provides a modern, responsive user interface for customers and administrators to manage pharmacy operations, including product listings, orders, and user authentication.

🚀 Features

⚡ Vite-powered React app – lightning-fast development and build

🧩 Modular component structure for easy maintenance

🎨 Tailwind CSS styling for responsive UI

🔐 Authentication and User Dashboard

📦 Integration-ready API layer for backend (PHP/MySQL)

🧠 Scalable architecture suitable for future modules (inventory, payments, etc.)

🛠️ Tech Stack
Category	Technology
Frontend Framework	React

Build Tool	Vite

Styling	Tailwind CSS

Package Manager	npm

State Management	React Hooks / Context API
Backend (connected via API)	PHP + MySQL
⚙️ Project Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/allen-city-pharmacy-frontend.git
cd allen-city-pharmacy-frontend

2️⃣ Install Dependencies
npm install


If you encounter an error like:

Cannot find module '@vitejs/plugin-react'


Run this command:

npm install @vitejs/plugin-react --save-dev

3️⃣ Start the Development Server
npm run dev


Then open your browser and go to:

http://localhost:5173

🧩 Project Structure
allen-city-pharmacy-frontend/
│
├── public/                     # Static files
├── src/
│   ├── assets/                 # Images, icons, etc.
│   ├── components/             # Reusable React components
│   ├── pages/                  # Page components (Home, Login, Dashboard)
│   ├── hooks/                  # Custom React hooks
│   ├── context/                # Global app context (user, theme, etc.)
│   ├── services/               # API integration files
│   ├── App.jsx                 # Root React component
│   └── main.jsx                # Application entry point
│
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation

🧰 Available Scripts
Command	Description
npm run dev	Start the development server
npm run build	Create a production build
npm run preview	Preview the production build locally
npm install	Install all dependencies
🔌 Backend Integration

This frontend is designed to connect to the Allen City Pharmacy Backend (PHP + MySQL) API.
Make sure your .env file includes the correct backend API URL, for example:

VITE_API_BASE_URL=http://localhost/allen-city-pharmacy-backend/api

🧾 Troubleshooting
Common Issues
❌ Cannot find module '@vitejs/plugin-react'

Run:

npm install @vitejs/plugin-react --save-dev

⚠️ “CJS build of Vite’s Node API is deprecated”

You can safely ignore this warning — it just means that Vite is transitioning to pure ESM.
(You may upgrade to the latest version of Node.js and Vite to remove the warning.)

👨‍💻 Contributors

Erwin De Jesus – Lead Developer

Project Team – Allen City Pharmacy IT Unit

📜 License

This project is licensed under the MIT License — free for commercial and personal use.
