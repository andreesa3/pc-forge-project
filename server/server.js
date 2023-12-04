const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();

const port = 3050;

const db = require('./db');
const User = require('./db/models/User');

// Passa i dati dal frontend al backend
app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        res.json("Success");
      }
    } else {
      res.json('email o password non corrette');
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/register', async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Connessione db
db.connect();



app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
})