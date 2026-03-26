const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// In-memory users storage
let users = [];
let idCounter = 1;

// GET /users - list users with optional search and sort
app.get("/users", (req, res) => {
  let result = [...users];

  // search by name or email
  if (req.query.search) {
    const search = req.query.search.toLowerCase();
    result = result.filter(
      u =>
        u.name.toLowerCase().includes(search) ||
        u.email.toLowerCase().includes(search)
    );
  }

  // sort
  if (req.query.sort) {
    const order = req.query.order === "desc" ? -1 : 1;
    result.sort((a, b) => {
      if (a[req.query.sort] < b[req.query.sort]) return -1 * order;
      if (a[req.query.sort] > b[req.query.sort]) return 1 * order;
      return 0;
    });
  }

  res.json(result);
});

// GET /users/:id - get user by id
app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// POST /users - create a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "Name and email are required" });

  const newUser = { id: idCounter++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id - update a user
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });

  const { name, email } = req.body;
  if (name) user.name = name;
  if (email) user.email = email;

  res.json(user);
});

// DELETE /users/:id - delete a user
app.delete("/users/:id", (req, res) => {
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "User not found" });

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));