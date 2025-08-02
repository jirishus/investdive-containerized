const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Route
app.get('/', (req, res) => {
  res.send('🚀 Node app running inside Docker!');
});

// HealthCheck
app.get('/health', (req, res) => {
  res.send('server ok');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
