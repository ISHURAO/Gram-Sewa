# 🌾 GramSewa - Rural Governance Made Digital

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v19.2-blue?style=flat-square&logo=react)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express-v5.2-black?style=flat-square&logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v9.1-green?style=flat-square&logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)]()

**Connecting villagers with local governance through secure, transparent communication**

[📖 Features](#features) • [🚀 Quick Start](#quick-start) • [📁 Structure](#project-structure) • [🔐 Security](#security) • [📚 Documentation](#documentation) • [🤝 Contributing](#contributing)

</div>

---

## 📋 Overview

**GramSewa** (ग्राम सेवा) is a comprehensive full-stack web application that revolutionizes rural governance by bridging the communication gap between villagers and local authorities (Sarpanch). It provides a secure, role-based platform for submitting, tracking, and resolving community grievances with complete transparency.

### 🎯 Problem Statement
Rural governance traditionally faces challenges in:
- Poor communication between villagers and authorities
- Lack of accountability in grievance handling
- No systematic tracking of complaint resolution
- Limited transparency in administrative decisions

### ✅ Solution
GramSewa provides:
- **Secure Authentication**: Role-based access control for villagers and authorities
- **Unified Platform**: Single source of truth for all complaints
- **Real-time Tracking**: Citizens can monitor complaint status
- **Transparent Dashboard**: Authorities manage and resolve issues efficiently
- **Village-Based Organization**: Complaints organized by village for better management

---

## ✨ Features

### 🏘️ Villager Features
- 📍 **Village Selection**: Easy village identification and registration
- 📝 **Complaint Submission**: Detailed complaint filing with categories and descriptions
- 🔔 **Real-time Updates**: Instant notifications on complaint status changes
- 📊 **Complaint Tracking**: Dashboard showing all personal complaints and their status
- 🔐 **Secure Authentication**: JWT-based secure login system
- 📱 **Responsive Design**: Works seamlessly on mobile and desktop

### 👨‍💼 Authority Features
- 📈 **Centralized Dashboard**: View all complaints in their village
- ✅ **Status Management**: Update complaint status (New → In Progress → Resolved)
- 💬 **Feedback System**: Provide resolution details and updates
- 🔍 **Analytics**: Track complaint statistics and resolution times
- 🛡️ **Role-Based Access**: Secure admin panel restricted to authorities

### 🔒 Security Features
- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Secure token-based authentication
- **CORS Protection**: Cross-origin request handling
- **Environment Variables**: Sensitive data management
- **Database Security**: MongoDB connection with authentication

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher
- **MongoDB**: v5.0 or higher (local or cloud)
- **Git**: For version control

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/ISHURAO/Gram-Sewa.git
cd Gram-Sewa
```

#### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Start development server
npm run dev
```

The backend server will run on `http://localhost:5000`

#### 3. Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173`

#### 4. Access the Application
- **Villager Portal**: http://localhost:5173
- **API Server**: http://localhost:5000/api

---

## 📁 Project Structure

```
Gram-Sewa/
├── backend/
│   ├── config/               # Configuration files
│   ├── models/               # MongoDB schemas
│   ├── routes/               # API endpoints
│   ├── middleware/           # Authentication & validation middleware
│   ├── controllers/          # Business logic
│   ├── server.js             # Express app entry point
│   ├── package.json          # Backend dependencies
│   ├── .env.example          # Environment variables template
│   └── node_modules/         # Dependencies (git ignored)
│
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── context/          # Context API state management
│   │   ├── services/         # API call utilities
│   │   ├── styles/           # CSS modules
│   │   └── App.jsx           # Root component
│   ├── public/               # Static assets
│   ├── index.html            # HTML entry point
│   ├── vite.config.js        # Vite configuration
│   ├── package.json          # Frontend dependencies
│   ├── eslint.config.js      # Code quality settings
│   └── node_modules/         # Dependencies (git ignored)
│
├── .gitignore                # Git ignore patterns
├── .env.example              # Global environment template
└── README.md                 # This file
```

---

## 🏗️ Architecture

```mermaid
graph TB
    A["🖥️ Frontend<br/>React + Vite"] -->|HTTP/REST| B["🔌 Backend<br/>Express.js"]
    B -->|Query/Insert| C[("🗄️ MongoDB<br/>Database")]
    B -->|Validate| D["🔐 JWT Auth<br/>Middleware"]
    A -->|State Management| E["📦 Context API"]
    A -->|UI Components| F["⚛️ React Router"]
    
    style A fill:#61dafb,stroke:#333,color:#000
    style B fill:#000,stroke:#333,color:#fff
    style C fill:#13aa52,stroke:#333,color:#fff
    style D fill:#ff6b6b,stroke:#333,color:#fff
    style E fill:#61dafb,stroke:#333,color:#000
    style F fill:#61dafb,stroke:#333,color:#000
```

### Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend** | React | 19.2.0 |
| **Frontend Build** | Vite | 7.2.4 |
| **Frontend Routing** | React Router DOM | 7.12.0 |
| **HTTP Client** | Axios | 1.13.2 |
| **Backend** | Express.js | 5.2.1 |
| **Database** | MongoDB | 9.1.2 |
| **Authentication** | JWT | 9.0.3 |
| **Password Hashing** | bcryptjs | 3.0.3 |
| **CORS** | cors | 2.8.5 |
| **Dev Tools** | Nodemon | 3.1.11 |
| **Linting** | ESLint | 9.39.1 |

---

## 🔐 Security

### Environment Variables Setup

Create a `.env` file in the `backend` directory:

```env
# MongoDB Configuration
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/gramsewa

# JWT Configuration
JWT_SECRET=your-secure-jwt-secret-here-min-32-characters

# Server Configuration
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### Security Best Practices Implemented

✅ **Password Security**
- Passwords hashed with bcryptjs (salt rounds: 10)
- Never stored in plain text

✅ **Authentication**
- JWT-based stateless authentication
- Tokens expire after 24 hours
- Role-based access control (RBAC)

✅ **API Security**
- CORS properly configured
- Input validation on all routes
- Rate limiting ready (can be implemented)

✅ **Database Security**
- MongoDB connection string secured in .env
- Database access credentials encrypted
- No sensitive data in code

---

## 📚 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "village": "Nakpur",
  "role": "villager"
}
```

**Response**: `201 Created`
```json
{
  "message": "User registered successfully",
  "userId": "507f1f77bcf86cd799439011"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response**: `200 OK`
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "role": "villager"
  }
}
```

### Complaint Endpoints

#### Submit Complaint
```http
POST /api/complaints
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Pothole on Main Road",
  "description": "Large pothole near school causing accidents",
  "category": "Infrastructure",
  "severity": "high"
}
```

#### Get All Complaints (Authority)
```http
GET /api/complaints/village/:villageId
Authorization: Bearer <token>
```

#### Update Complaint Status
```http
PATCH /api/complaints/:complaintId
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "resolved",
  "resolution": "Pothole filled with concrete"
}
```

---

## 🔄 Data Models

### User Schema
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  village: String,
  role: String (enum: ['villager', 'authority']),
  createdAt: Date,
  updatedAt: Date
}
```

### Complaint Schema
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  category: String,
  severity: String (enum: ['low', 'medium', 'high']),
  status: String (enum: ['new', 'in_progress', 'resolved', 'rejected']),
  submittedBy: ObjectId (ref: User),
  village: String,
  attachments: [String],
  resolution: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 📊 Screenshots & Features Demo

### 🖼️ User Flows

**Villager Journey**:
```
Registration → Village Selection → Submit Complaint → Track Status → Receive Updates
```

**Authority Journey**:
```
Login → View Dashboard → Review Complaints → Update Status → Send Updates
```

---

## 🛠️ Development

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd ../frontend
npm test
```

### Code Quality
```bash
# Linting
npm run lint

# Format code
npm run format
```

### Development Scripts

**Backend**:
```bash
npm run dev      # Start with nodemon
npm start        # Start production server
npm test         # Run tests
```

**Frontend**:
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

---

## 🌐 Deployment

### Deployment Platforms

#### **Vercel** (Frontend)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### **Render** (Backend)
1. Push code to GitHub
2. Connect repository to Render
3. Set environment variables
4. Deploy with one click

#### **MongoDB Atlas** (Database)
1. Create cluster at mongodb.com/cloud/atlas
2. Get connection string
3. Add to `.env` as `MONGO_URI`

#### **AWS** (Full Stack)
See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## 📖 Documentation

- [API Documentation](docs/API.md) - Complete API reference
- [Developer Guide](docs/DEVELOPER.md) - Setup and contribution guide
- [User Guide](docs/USER_GUIDE.md) - How to use the application
- [Deployment Guide](docs/DEPLOYMENT.md) - Production deployment
- [Security Guidelines](docs/SECURITY.md) - Security best practices

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 1. Fork the Repository
```bash
gh repo fork ISHURAO/Gram-Sewa
```

### 2. Create a Feature Branch
```bash
git checkout -b feature/amazing-feature
```

### 3. Make Your Changes
- Follow the existing code style
- Write clear commit messages
- Add comments for complex logic

### 4. Commit Changes
```bash
git commit -m "feat: add amazing feature"
```

### 5. Push and Create PR
```bash
git push origin feature/amazing-feature
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

---

## 📋 Code of Conduct

Please read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

---

## 🐛 Issues & Bug Reports

Found a bug? Please create an issue:
- [Bug Report Template](https://github.com/ISHURAO/Gram-Sewa/issues/new?template=bug_report.md)
- [Feature Request Template](https://github.com/ISHURAO/Gram-Sewa/issues/new?template=feature_request.md)

---

## 📝 License

This project is licensed under the **ISC License** - see [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgments

- **Inspiration**: Rural governance challenges
- **Community**: Thanks to all contributors
- **Technology**: Built with React, Express, and MongoDB
- **Open Source**: Grateful for all open-source libraries used

---

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/ISHURAO/Gram-Sewa/issues)
- **Email**: [ishurao@example.com](mailto:ishurao@example.com)
- **GitHub**: [@ISHURAO](https://github.com/ISHURAO)

---

## 🚀 Roadmap

### v1.0 (Current)
- ✅ User authentication
- ✅ Complaint submission
- ✅ Status tracking
- ✅ Authority dashboard

### v1.1 (Upcoming)
- 📅 Email notifications
- 📱 Mobile app
- 🗺️ Advanced analytics
- 📤 File uploads

### v2.0 (Future)
- 🤖 AI-powered complaint classification
- 📊 Predictive analytics
- 🌍 Multi-language support
- 🔔 SMS notifications

---

<div align="center">

**[⬆ Back to Top](#-gramsewa---rural-governance-made-digital)**

Made with ❤️ by [ISHU YADAV](https://github.com/ISHURAO)

Stars ⭐ and contributions are welcome!

</div>
