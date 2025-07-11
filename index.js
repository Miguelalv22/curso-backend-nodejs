const express = require('express');
const routerApi = require('./routes')
const app = express();
const { logErrors, errorHandler } = require('./middlewares/errorHandlers')
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola server');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy la nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
