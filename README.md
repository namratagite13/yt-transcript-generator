
YouTube Transcript Generator API

A backend api for generating YouTube video transcripts, built with Node.js, Express, and MongoDB.

## Features
* **User Authentication:** user registration and login using JWT (JSON Web Tokens).
* **Transcript Generation:** generate YouTube video transcripts.
* **RESTful API:** endpoints for managing users and transcripts.
* **Global Error Handling:** Centralized error management for consistent API responses.

## Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB 
* **Authentication:** bcrypt (password hashing), jsonwebtoken (JWT)
* **Utilities:** dotenv (environment management)

## Getting Started

### Prerequisites
* Node.js (v14+)
* MongoDB instance (local or Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repository-url>
   cd youtube-transcript-generator
Install dependencies:

Bash
npm install
Configure environment variables:
Create a .env file in the root directory and add the following:

Code snippet
PORT=3000
MONGO_URI=your_mongodb_connection_string
ACCESS_KEY=your_secret_jwt_key
Run the server:

Bash
npm start
API Endpoints
Authentication
POST /api/auth/register: Create a new user account.

POST /api/auth/login: Authenticate and receive a JWT.

GET /api/auth/:id: Fetch user profile (protected).

Transcripts
GET /api/transcripts/:videoId: Fetch or retrieve a cached transcript for a given YouTube video ID (protected).

Error Handling
Used a centralized error handler that returns standardized JSON responses for API errors.

Auth Midlleware
Implemented JWT for secure authentication.
