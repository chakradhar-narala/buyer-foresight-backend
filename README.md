BuyerForeSight Backend - User Management API

A simple Node.js + Express REST API for managing users. You can create, read, update, and delete users.

1. Features / Endpoints
Method	Endpoint	Description
GET	/users	List all users (supports optional search and sort)
GET	/users/:id	Get a single user by ID
POST	/users	Create a new user
PUT	/users/:id	Update an existing user
DELETE	/users/:id	Delete a user

Optional Query Parameters for GET /users:

search → filter by name or email
sort → field to sort by (name, etc.)
order → asc or desc
2. Getting Started (Local)
Clone the repo:
git clone https://github.com/chakradhar-narala/buyer-foresight-backend.git
cd buyer-foresight-backend
Install dependencies:
npm install
Start the server:
node index.js
Test API in Postman or browser:
List users: GET http://localhost:3000/users
Add user: POST http://localhost:3000/users with JSON body:
{
  "name": "Alice",
  "email": "alice@test.com"
}
3. Data

This project uses in-memory storage for users.

Data will reset when the server restarts.
You could also switch to JSON file or SQLite for persistent storage if needed.
4. Tech Stack
Backend: Node.js
Framework: Express
Data Storage: In-memory (can be swapped with JSON or SQLite)
Testing: Postman / curl
5. Deployment
Can be deployed on Render, Heroku, or any Node.js hosting.
Example Render URL: https://buyer-foresight-backend.onrender.com
Update Postman with the live URL when testing online.
6. Notes
Right now, the API is simple and lightweight for testing.
Future improvements could include authentication, validation, or persistent storage.
