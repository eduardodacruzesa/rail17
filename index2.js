const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World setenta vezes sete 7777777!    -- mas agora estou mandando mais alguma coisa');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
