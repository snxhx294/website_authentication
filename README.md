# 🔐 Website Authentication System (React)

A **React-based authentication frontend** demonstrating core user authentication flows such as **registration, login, and password recovery** using modern React practices and client-side routing.

This project is designed as a **UI-focused authentication system**, suitable for academic submissions, frontend practice, or as a base for integrating a real backend (Node.js, Firebase, etc.).

---

## 📌 Project Overview

Authentication is a fundamental requirement for modern web applications.
This project implements a **clean and modular frontend authentication system** using:

* React functional components
* React Router for navigation
* Controlled form inputs
* Modular CSS for styling

⚠️ **Note:** This project currently focuses on the **frontend only**. Form submissions are logged to the console and can be easily connected to a backend API.

---

## ✨ Features

* 🏠 Home page with navigation
* 📝 User Registration form
* 🔑 User Login form
* 🔄 Forgot Password / Reset request form
* 📦 Component-based architecture
* 🎨 Separate CSS for each component
* 🔀 Client-side routing using React Router

---

## 🧩 Application Flow

1. **Home Page**

   * Navigate to Register, Login, or Forgot Password

2. **Registration**

   * Username, email, and password input
   * Form data captured using React state

3. **Login**

   * Email and password authentication form
   * Ready for backend integration

4. **Forgot Password**

   * Email input for password reset request
   * Placeholder for reset email logic

---

## 📂 Project Structure

```
website_authentication/
│
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Login.css
│   │   ├── Registration.js
│   │   ├── Registration.css
│   │   ├── ForgotPassword.js
│   │   ├── ForgotPassword.css
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Technologies Used

* **React (v19)**
* **React Router DOM**
* **JavaScript (ES6+)**
* **CSS**
* **Axios** (included for future API integration)
* **Create React App**

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/snxhx294/website_authentication.git
cd website_authentication
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm start
```

The application will run at:

```
http://localhost:3000
```

---

## 🧪 Testing

To run tests:

```bash
npm test
```

(Testing libraries are preconfigured via Create React App.)

---

## 🔌 Backend Integration (Optional)

This project is backend-agnostic. You can easily integrate:

* Node.js + Express
* Firebase Authentication
* REST APIs using Axios
* JWT-based authentication

📌 Suggested improvement:
Replace `console.log()` calls with API requests using Axios.

---

## 🔐 Security Notes

* No passwords are stored (frontend-only demo)
* No authentication tokens are generated
* Intended for **educational and prototype use**

---

## 🌱 Future Enhancements

* API-based authentication
* JWT token handling
* Protected routes
* Form validation & error handling
* Password strength indicators
* UI feedback (alerts / toasts)
* 
