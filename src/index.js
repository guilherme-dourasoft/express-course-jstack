const express = require('express');
const routes = require('./routes');

const app = express();
app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server inicializado na porta ${port}`);
});
