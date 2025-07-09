const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola server');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy la nueva ruta');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: 120
  });
});

app.get('/categories', (req, res) => {
  res.json({
    clothes: 'Clothes',
    electronics: 'Electronics',
    toys: 'Toys'
  });
});

app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
