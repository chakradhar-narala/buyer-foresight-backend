BuyerForeSight Backend - User Management API

A simple Node.js + Express REST API for managing users. You can create, read, update, and delete users.

### 1. Endpoints

* **GET /users**
  List all users. Supports optional query parameters:

  * `?search=` → filter by name or email
  * `?sort=name&order=asc` → sort by field

* **GET /users/:id**
  Get a single user by ID.

* **POST /users**
  Create a new user. JSON body example:

  ```json
  {
    "name": "Alice",
    "email": "alice@test.com"
  }
  ```

* **PUT /users/:id**
  Update an existing user. JSON body example:

  ```json
  {
    "name": "Alice Smith",
    "email": "alice.smith@test.com"
  }
  ```

* **DELETE /users/:id**
  Delete a user by ID.

---

### 2. Data

* Currently uses **in-memory storage**.
* Optional alternatives: **JSON file** or **SQLite**.
* **Note:** In-memory data resets when the server restarts.

---

### 3. Tech Stack

* **Backend:** Node.js
* **Framework:** Express
* **Data Storage:** In-memory (or JSON / SQLite)
* **Testing:** Postman / curl

---

### 4. Getting Started (Local)

1. Clone the repo:

```bash
git clone https://github.com/chakradhar-narala/buyer-foresight-backend.git
cd buyer-foresight-backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
node index.js
```

4. Test endpoints in Postman or curl.
   Base URL: `http://localhost:3000`

---

### 5. Deployment

* Deploy on **Render**, **Heroku**, or any Node.js host.
* Example Render URL: `https://buyer-foresight-backend.onrender.com`
* Replace `localhost:3000` with the live URL for testing.

---

### 6. Notes

* Data is **temporary** in this version. Restarting the server clears all users.
* Future improvements: persistent storage, validation, authentication.

---
