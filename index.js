const express = require('express');
const app = express();

const PORT = 3000;

app.get('/api/v1/welcome', (req, res) => {
  res.send('¡Hola clinclin!');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});