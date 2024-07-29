const express = require('express');

const app = express();

// Parse JSON bodies
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});