const express = require('express');
const app = express();
const PORT = PORT_NUMBER;

app.get('/health', (req, res) => {
  res.json({ status: 'SERVICE_NAME is alive' });
});

app.listen(PORT, () => {
  console.log(`SERVICE_NAME running on port ${PORT}`);
});
