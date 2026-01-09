# User Management API with MongoDB

A mini backend project built with **Node.js**, **Express**, and **MongoDB** (Mongoose), focused on learning real-world backend structure, REST API fundamentals, and database integration.

## Features

- REST API for managing users
  - `GET /users` → fetch all users
  - `POST /users` → create a new user
- Data stored in **MongoDB** using Mongoose
- Error handling with centralized middleware
- Request logging middleware
- Fully modular structure: `controllers`, `routes`, `middleware`, `config`

## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/MilosMicun/user-management-api-mongo2.git
cd user-management-api-mongo2
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root folder:

env
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=3000
Start the server:

bash
Copy code
node server.js
The server will run on http://localhost:3000.

Usage
Test the API with Postman or any HTTP client.

Example POST request body:

json
Copy code
{
  "name": "Milos",
  "email": "milos@example.com"
}
