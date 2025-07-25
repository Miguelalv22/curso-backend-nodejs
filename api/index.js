const express = require('express');
const routerApi = require('./routes')
const cors = require('cors');
const app = express();
const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandlers')
const port = process.env.PORT || 3000;
app.use(express.json());

const whiteList = [
  'http://127.0.0.1:5500/',
  'http://localhost:5500',
  'https://myapp.com',
];

const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'))
    }
  }
};

app.get('/api', (req, res) => {
  res.send('Hola server');
});

app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
