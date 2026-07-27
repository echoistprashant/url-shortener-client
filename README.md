

# LinkLeaf Frontend

**Simple links. Better insights.**

LinkLeaf Frontend is a modern React application built for the LinkLeaf URL Shortener platform. It provides an intuitive interface for creating, managing, and analysing shortened URLs with secure user authentication and a responsive user experience.

---

## Overview

This project is the frontend of the LinkLeaf URL Shortener. It communicates with the FastAPI backend through REST APIs and provides all the functionality required for users to manage their shortened links.

---

## Features

### Authentication

- User registration
- User login
- JWT-based authentication
- Protected routes
- Secure logout

### URL Management

- Create short URLs
- Create custom aliases
- Search URLs
- Delete URLs
- Copy shortened links
- Open original URLs
- Open shortened URLs

### Analytics

- View total clicks
- Check link status
- View expiration information
- Display original URL
- Display shortened URL
- Display short code

### User Interface

- Fully responsive design
- Mobile-friendly navigation
- Dashboard layout
- Toast notifications
- Delete confirmation modal
- Reusable UI components
- Clean and consistent design

---

## Tech Stack

### Frontend

- React
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- Context API

### Backend

- FastAPI
- SQLAlchemy
- JWT Authentication
- SQLite / PostgreSQL

---

## Project Structure

```text
src
│
├── assets/
│
├── components/
│   ├── analytics/
│   ├── layout/
│   ├── modals/
│   └── ui/
│
├── context/
│
├── pages/
│
├── routes/
│
├── services/
│
├── utils/
│
├── App.jsx
└── main.jsx
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/linkleaf-frontend.git
```

```bash
cd linkleaf-frontend
```

---

### Install dependencies

```bash
npm install
```

---

### Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:8000
```

Replace the API URL with your deployed backend URL when running the application in production.

---

### Start the development server

```bash
npm run dev
```

---

### Build for production

```bash
npm run build
```

---

## Backend

This frontend works with the LinkLeaf FastAPI backend.

Backend Repository:

```
https://github.com/yourusername/linkleaf-backend
```

---

## Deployment

The frontend can be deployed using platforms such as:

- Vercel
- Netlify

The backend can be deployed using:

- Render
- Railway
- Fly.io

---

## Future Improvements

The current version focuses on the core functionality of a URL shortener. Future releases may include:

- URL expiration selection
- Edit existing URLs
- QR code generation
- Pagination
- Advanced analytics
- Browser and device statistics
- Country-based analytics
- Data visualisation
- Dark mode

---

## Author

**Prashant Yadav**

GitHub: https://github.com/echoistprashant

---

## License

This project is intended for learning and portfolio purposes.
