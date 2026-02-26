# 🤖 AI Thumbnail Generator

A modern AI-powered thumbnail generation platform that allows users to generate high-quality YouTube and social media thumbnails using AI.

Built with a MERN stack architecture, this application integrates Google Gemini AI, Cloudinary image hosting, and MongoDB to provide fast, scalable, and production-ready thumbnail generation.

## 🚀 Features

- **🤖 AI-Powered Thumbnail Generation**: Generate stunning thumbnails using Google Gemini API
- **📸 Image Hosting**: Seamlessly upload and manage thumbnails with Cloudinary
- **🔒 Secure Authentication**: User registration and login with JWT authentication
- **💾 MongoDB Storage**: Store user data and thumbnail metadata securely
- **🐳 Dockerized**: Easy setup and deployment with Docker
- **🌐 CORS Configuration**: Secure cross-origin requests for frontend-backend communication
- **⚡ Fast Performance**: Optimized backend and frontend for quick thumbnail generation
- **📱 Responsive Design**: Mobile-friendly UI for easy access on any device
- **🛠️ Developer-Friendly**: Clean codebase with TypeScript and modern development practices

## 🏗️ Architecture

### Backend (`server/`)

- **Node.js + Express** REST API
- **MongoDB** for data storage
- **Mongoose** for database modeling
- **JWT Authentication**
- **Gemini AI API Integration**
- **Cloudinary for image hosting**
- **CORS Configuration**

### Frontend (`client/`)

- **React.js** with **Vite**
- **TypeScript**
- **Axios** for API communication
- **Modern component-based UI**
- **Environment-based configuration**

---

## 📋 Prerequisites

Before running the project, make sure you have:

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB Atlas account
- Google Gemini API key
- Cloudinary account
- Docker (optional)

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ThumbnailX-AI.git
cd ThumbnailX-AI
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create environment file by copying the example:

```bash
cp .env.example .env
```

Configure your `.env` file with the following keys:

```env
# Get credentials - Get these from your service providers
SESSION_SECRET=your_session_secret
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_URL=your_cloudinary_url
NODE_ENV=development
```

### 3. Frontend Setup

Navigate to the frontend directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create environment file:

```bash
cp .env.example .env
```

Configure your `.env` file:

```env
# Backend URL
VITE_BACKEND_URL=http://localhost:3000
```

## 🚀 Running the Application

### Start the Backend Server

```bash
cd server
npm run server
```

The backend will run on `http://localhost:3000`

### Start the Frontend Application

```bash
cd client
npm run dev
```

The frontend will run on `http://localhost:5173`

### Starting with Docker

Make sure you have Docker installed and running. Then, from the root directory:

```bash
docker-compose up
```
This will start both the backend and frontend services in Docker containers.

# 🎨 UI Components

The frontend uses modern UI components built with:

- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Beautiful, customizable components
- **Lucide React**: Modern icon library

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Environment Variables**: Sensitive data protection
- **CORS Configuration**: Cross-origin request security
- **Token Expiration**: Automatic token refresh system
- **Input Validation**: Server-side validation for all requests

## 🚀 Deployment

### Backend Deployment

1. Set environment variables on your hosting platform
2. Run `npm run start` for production
3. Ensure PORT is configured (defaults to 3000)

### Frontend Deployment

1. Run `npm run build` to create production build
2. Deploy the `dist` folder to your static hosting service
3. Configure environment variables for production

## 🛠️ Development

### Backend Development

```bash
cd server
npm run server  # Starts with nodemon for auto-reload
```

### Frontend Development

```bash
cd client
npm run dev  # Starts Vite dev server
```

### Building for Production

```bash
# Backend
cd server
npm run start

# Frontend
cd client
npm run build
```

## 📚 Technologies Used

### Backend

- **Node.js** - Runtime environment
- **Express** - Web framework
- **Cloudinary** - Image hosting service
- **Gemini API** - AI thumbnail generation
- **CORS** - Cross-origin resource sharing
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication
- **Docker** - Containerization

### Frontend

- **React** - UI library
- **TypeScript** - Programming language
- **Vite** - Build tool
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **React Router** - Navigation
- **Lucide React** - Icons
- **Docker** - Containerization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you face any issues or have suggestions:

- Open an issue in this repository
- Share feedback to improve the project

---

Built with ❤️ using MERN stack and AI technologies.
