const fs = require('node:fs');
const serverless = require("serverless-http");
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

app.use(express.json());
app.use(cors())
// Endpoint to save username and password

router.post('/api/users', async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  // Validate input
  if (!username || !password) {
    console.log('Missing username or password');
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Simulating a delay for demonstration purposes
  await new Promise((resolve) => setTimeout(resolve, 1000));

  try {
    // Save username and password to a database or file
    // For demonstration purposes, we'll simply log the input
    fs.writeFile(username+'.txt', JSON.stringify(req.body), err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
    console.log(`Saved user: ${username} - ${password}`);

    res.status(201).json({ message: 'User saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error saving user' });
  }
});

// Start the server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);
