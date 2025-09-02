// Sample vulnerable Node.js app for demonstration only

const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
  // Vulnerable to reflected XSS for scanning demo
  const name = req.query.name || 'World';
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(3000, () => {
  console.log('Demo app listening on port 3000');
});