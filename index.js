const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello World 7 7!');
=======
  res.send('Hello World!');
>>>>>>> f55e3e2 (Meu primeiro commit)
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
