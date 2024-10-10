
---

# **StyleMate (where style matters) **
A fashion-first matching app where users connect based on their sense of style rather than physical appearance. Whether you're into streetwear, casual, or high fashion, StyleMate is here to connect you with like-minded fashion enthusiasts. This app is built using React for the frontend and Node.js, Express, and SQL for the backend.

## **Table of Contents**
- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## **About**

StyleMate allows users to create profiles highlighting their fashion styles, browse through potential matches based on shared fashion interests, and connect with others who have similar tastes. The goal is to build connections through fashion, fostering a community where personal style is the key to making connections.

---

## **Features**

- **User Authentication**: Sign up, log in, and manage profiles.
- **Fashion Style-Based Matching**: Users are matched with others who have similar fashion styles (e.g., streetwear, formal, casual).
- **Swipe Functionality**: Swipe left to pass or swipe right to express interest in another user.
- **Profile Customization**: Users can upload profile pictures, select a fashion style, and write a bio to share more about themselves.
- **Real-Time Matching**: Users receive notifications when they are matched with another user.
- **Like/Dislike System**: Matches are initiated when both users like each other’s fashion profile.
- **Secure Storage**: Profile pictures and data are securely stored.
- **Responsive Design**: The app is designed to work on both mobile and desktop devices.

---

## **Getting Started**

To get a local copy of the project up and running, follow these steps:

### **Prerequisites**

You need to have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/aashish-thapa/stylemate.git
   cd stylemate
   ```

2. **Backend Setup**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Set up environment variables by creating a `.env` file in the `backend` folder:
     ```
     DB_HOST=localhost
     DB_USER=root
     DB_PASS=yourpassword
     DB_NAME=stylemate
     JWT_SECRET=yourjwtsecret
     ```

   - Set up the database:
     ```bash
     mysql -u root -p
     CREATE DATABASE stylemate;
     ```

   - Run the application:
     ```bash
     npm start
     ```

3. **Frontend Setup**:
   - Navigate to the `frontend` folder:
     ```bash
     cd ../frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the application:
     ```bash
     npm start
     ```

4. Open the browser and navigate to `http://localhost:3000` for the frontend, and the backend runs on `http://localhost:5000`.

---

## **Technologies Used**

- **Frontend**: React, Axios
- **Backend**: Node.js, Express, Sequelize (ORM)
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Storage**: Cloudinary or AWS S3 (optional for image storage)
- **Deployment**: Heroku (backend), Vercel/Netlify (frontend)

---

## **Contributing**

We welcome contributions to **StyleMate**! If you have an idea to improve the app, fix bugs, or add new features, please follow these steps:

1. **Fork the repository**.
2. **Clone your forked repository**:
   ```bash
   git clone https://github.com/aashish-thapa/stylemate.git
   ```
3. **Create a branch** for your feature/fix:
   ```bash
   git checkout -b feature-or-bugfix-name
   ```
4. **Make your changes**, and commit them:
   ```bash
   git commit -m "Added new feature or fixed a bug"
   ```
5. **Push your changes** to your forked repository:
   ```bash
   git push origin feature-or-bugfix-name
   ```
6. **Open a pull request** on the main repository, and describe your changes.

Before submitting a pull request, please ensure that your code follows the repository's code style and passes any tests.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Contact**

For any questions, feedback, or suggestions, please reach out to us via:

- Email: [aashishthapa520@gmail.com](mailto:aashishthapa520@gmail.com)
- GitHub: [@aashish-thapa](https://github.com/aashish-thapa)

---

Let me know if you'd like to modify this or need additional details!
