# To-Do Application

A full-stack task management application built with React and Node.js, featuring user authentication, task organization, email notifications, and a modern, responsive UI.

## Developer

**Manoj Garje**

## Features

- **User Authentication**: Secure registration and login system with JWT tokens
- **Task Management**: Create, read, update, and delete tasks
- **Task Organization**: Filter tasks by Inbox, Today, Upcoming, and Completed
- **Priority Levels**: Assign High, Medium, or Low priority to tasks
- **Due Dates**: Set and track due dates for tasks
- **Task Descriptions**: Add detailed descriptions to tasks
- **Email Notifications**: Automatic thank-you emails sent when users submit contact form feedback
- **Contact Form**: Submit feedback with email confirmation
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Toast Notifications**: User-friendly notifications for all actions
- **Animated Modals**: Smooth modal animations using Headless UI

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Hot Toast** - Toast notifications
- **Headless UI** - Accessible UI components

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Nodemailer** - Email service
- **Node Schedule** - Task scheduling for reminders

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## 🔧 Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd to-do-app
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 4. Set Up Environment Variables

#### Backend Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
PORT=5000

MONGO_URI=mongodb://localhost:27017/todo

JWT_SECRET=your_jwt_secret_key_here

EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
```

**Important Notes:**
- Replace `your_jwt_secret_key_here` with a strong, random secret key for JWT token signing
- Replace `your_email@gmail.com` with your Gmail address
- For `EMAIL_PASS`, you need to use a **Gmail App Password**, not your regular Gmail password
  - Go to your Google Account settings
  - Navigate to Security → 2-Step Verification → App passwords
  - Generate a new app password and use it here
- If using MongoDB Atlas, replace `mongodb://localhost:27017/todo` with your Atlas connection string

#### Frontend Environment Variables (if needed)

The frontend typically doesn't require a `.env` file unless you need to configure API URLs. If needed, create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:5000
```

### 5. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# If MongoDB is installed locally, start the service
# On Windows (if installed as a service, it should start automatically)
# On macOS/Linux:
mongod
```

Or use MongoDB Atlas (cloud) - no local installation needed.

### 6. Run the Application

#### Start Backend Server

```bash
cd backend
npm start
# or for development with auto-reload:
npm run dev
```

The backend server will run on `http://localhost:5000`

#### Start Frontend Development Server

Open a new terminal window:

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is occupied)

## 📝 Project Structure

```
to-do-app/
├── backend/
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Authentication middleware
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions (email, scheduling)
│   ├── index.js         # Entry point
│   └── .env            # Environment variables (create this)
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React context (Auth)
│   │   ├── services/    # API service functions
│   │   └── App.jsx      # Main app component
│   └── package.json
└── README.md
```

## 🎯 Usage

1. **Register/Login**: Create an account or login with existing credentials
2. **Create Tasks**: Use the Quick Add Task form or navigate to Add Task page
3. **Organize Tasks**: Filter tasks by Inbox, Today, Upcoming, or Completed
4. **Manage Tasks**: Edit, complete, or delete tasks as needed
5. **Contact**: Submit feedback through the contact form to receive email confirmation

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected routes
- Rate limiting on API endpoints
- Input validation

## 📧 Email Configuration

The application uses Nodemailer with Gmail SMTP. Ensure you:
1. Have 2-Step Verification enabled on your Google Account
2. Generate an App Password from Google Account settings
3. Use the App Password (not your regular password) in the `.env` file

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally, or
- Check your MongoDB Atlas connection string
- Verify network connectivity

### Email Not Sending
- Verify Gmail App Password is correct
- Check that 2-Step Verification is enabled
- Ensure `EMAIL_USER` and `EMAIL_PASS` are set correctly in `.env`

### Port Already in Use
- Change the `PORT` in backend `.env` file
- Or stop the process using the port

## 👤 Contact

**Developer**: Manoj Garje
Mobile no: +91 9326179183
