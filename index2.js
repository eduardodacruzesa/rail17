const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World setenta vezes sete 7777777!   <h2> -- mas agora estou mandando mais alguma </h2> <h3>este é H3</h3><p><h4>este é H4</h4></p><p><h1>este é H1</h1></p> coisa');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
