const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// implement your solution here


app.use((req, res, next) => {
  res.status(404).json({ error: 'Sorry, the requested endpoint was not found.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
