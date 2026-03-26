BuyerForeSight Backend Assignment
Backend Engineer Assessment (Node.js)
Core Task

Build a User Management REST API that allows creating, reading, updating, and deleting users.

1. Endpoints
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

Example Requests:

List all users:
GET http://localhost:3000/users
Get a user by ID:
GET http://localhost:3000/users/1
Create a user:
POST http://localhost:3000/users
Content-Type: application/json

{
  "name": "Alice",
  "email": "alice@test.com"
}
Update a user:
PUT http://localhost:3000/users/1
Content-Type: application/json

{
  "name": "Alice Smith",
  "email": "alice.smith@test.com"
}
Delete a user:
DELETE http://localhost:3000/users/1
2. Data
This project uses in-memory storage by default.
You can optionally switch to JSON file or SQLite for persistent storage.
Note: In-memory storage means all data will reset when the server restarts.
3. Tech Stack
Backend: Node.js
Framework: Express
Data Storage: In-memory (can be swapped with JSON or SQLite)
Testing: Postman / curl
4. Getting Started (Local)
Clone the repo:
git clone https://github.com/chakradhar-narala/buyer-foresight-backend.git
cd buyer-foresight-backend
Install dependencies:
npm install
Start the server:
node index.js
Test endpoints in Postman or curl using http://localhost:3000 as the base URL.
5. Deployment
The API can be deployed on Render, Heroku, or any Node.js hosting service.
Example live URL (Render): https://buyer-foresight-backend.onrender.com
Replace localhost:3000 with the live URL when testing in Postman.
6. Notes
Currently, data is temporary. Restarting the server clears all users.
Future improvements can include persistent storage, validation, or authentication.
