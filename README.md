# MERN Hotel Booking Application

A full-stack hotel booking application built using the **MERN stack**. This project allows users to browse hotels, book rooms, and manage reservations with a user-friendly interface.

---

## Features

### Authentication

- Secure login and registration using **JSON Web Tokens (JWT)**.
- Password hashing with **bcryptjs** for enhanced security.

### Hotel and Room Management

- **Add hotels and rooms** with details such as:
  - Hotel name, location, amenities, price, and availability.
- Upload images for hotels and rooms using **Cloudinary** and **Multer**.
- View and manage room bookings.

### Booking System

- Browse hotels with **sorting, filtering, and search functionality**.
- View room availability and book rooms directly.
- Secure payments via **Stripe** during the booking process.

### Admin Features

- Manage hotel and room details.
- View and manage all user bookings.

---

## Tech Stack

### Frontend

- **React** with **Vite** for fast development.
- **Tailwind CSS** for a responsive design.
- **React Router** for navigation.

### Backend

- **Node.js** with **Express.js** for server-side operations.
- **MongoDB** and **Mongoose** for database management.
- **Stripe** integration for payment processing.
- **Multer** and **Cloudinary** for image uploads.

### E2E Testing

- **Playwright** for automated end-to-end testing.

---

## Folder Structure

### Frontend

- `src/components`: Reusable UI components.
- `src/pages`: All pages (e.g., Home, Hotels, Booking).
- `src/api-client`: Functions for backend communication.
- `src/styles`: Tailwind CSS configuration and styles.
- `src/layouts`: The layout of the project.
- `src/forms`: Folder with all the forms handled by react-hook-form.
- `src/contexts`: Folder with all contexts used in the project(e.g. AppContext, SearchContext).
- `src/config`: Folder with enumerations.

### Backend

- `src/routes`: API routes for hotels, users, and bookings.
- `src/models`: MongoDB models for hotels, users, and bookings.
- `src/middleware`: Middleware for authentication and error handling.
- `src/shared`: Types shared between the frontend and backend.

### E2E

- `tests`: End-to-end test cases written with **Playwright**.
- `configs`: Playwright test configurations.

---

## Setup Instructions

### Prerequisites

- **Node.js v16.x** or higher.
- MongoDB database.
- Stripe and Cloudinary accounts for payment and image handling.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-name/mern-hotel-booking-app.git
   ```

2. Install dependencies:

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

### E2E Testing

```bash
cd e2e
npm install
```

3. Configure environment variables:

### Frontend .env

VITE_API_BASE_URL=<Your_Base_URL>
VITE_STRIPE_PUB_KEY=<Your_Stripe_Pub_Key>

### Backend .env

PORT=7000
MONGODB_CONNECTION_STRING=<Your_MongoDB_Connection_String>
JWT_SECRET_KEY=<Your_JWT_Secret_Key>
FRONTEND_URL=<Frontend_URL>
CLOUDINARY_CLOUD_NAME=<Your_Cloudinary_Cloud_Name>
CLOUDINARY_API_KEY=<Your_Cloudinary_Api_Key>
CLOUDINARY_API_SECRET=<Your_Cloudinary_Api_Secret>
STRIPE_API_KEY=<Stripe_Secret_Key>

### E2E .env

MONGODB_CONNECTION_STRING=<Your_MongoDB_Connection_String>
JWT_SECRET_KEY=<Your_JWT_Secret_Key>
FRONTEND_URL=<Frontend_URL>
CLOUDINARY_CLOUD_NAME=<Your_Cloudinary_Cloud_Name>
CLOUDINARY_API_KEY=<Your_Cloudinary_Api_Key>
CLOUDINARY_API_SECRET=<Your_Cloudinary_Api_Secret>
STRIPE_API_KEY=<Stripe_Secret_Key>

4. Build and start the application:

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
    cd frontend
    npm run build
```

---

### Deployment

The application is deployed on Render:

- **Backend**: <https://mern-booking-app-g5jh.onrender.com>

- **Frontend**: Bundled into the backend for deployment.

---

## License

This project is licensed under the [MIT License](./LICENSE).
