const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 5000;

// 🧠 Middleware
app.use(cors());
app.use(express.json());

// 📁 Path to users data
const usersFilePath = './data/users.json';

// 📁 Path to foods data
const foodsFilePath = './data/foods.json';

// 🛒 Login API
app.post('/api/login', (req, res) => {
  console.log("📥 Login request received:", req.body);

  // 🛑 Check if body exists and has name + password
  if (!req.body || !req.body.name || !req.body.password) {
    return res.status(400).json({ error: "Name and password are required" });
  }

  const { name, password } = req.body;

  // ✅ Read user data
  fs.readFile(usersFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error("❌ Error reading users.json:", err);
      return res.status(500).json({ error: "Server error" });
    }

    const users = JSON.parse(data);
    const foundUser = users.find(u => u.name === name && u.password === password);

    if (foundUser) {
      console.log("✅ Login successful for:", name);
      res.json({ success: true, user: foundUser });
    } else {
      console.log("❌ Invalid credentials");
      res.status(401).json({ success: false, message: "Invalid name or password" });
    }
  });
});

// 🍽️ API to fetch food products
app.get('/api/foods', (req, res) => {
  fs.readFile(foodsFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error("❌ Error reading foods.json:", err);
      return res.status(500).json({ error: "Server error" });
    }

    const foods = JSON.parse(data);
    res.json(foods);
  });
});

// 🟢 Start the server
app.listen(5000, '192.168.18.151', () => {
  console.log("🚀 Server is running at http://192.168.18.151:5000");
});
