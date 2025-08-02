const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', (req, res) => {
  // res.send('🚀 Node app running inside Docker autodeployed!');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// HealthCheck
app.get('/health', (req, res) => {
  res.send('server ok');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
