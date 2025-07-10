const express = require('express');
const { faker } = require('@faker-js/faker')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola server');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy la nueva ruta');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    })
  }

  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Soy un filter')
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 20
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parametros')
  }
});

app.get('/categories', (req, res) => {
  res.json({
    clothes: 'Clothes',
    electronics: 'Electronics',
    toys: 'Toys'
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
})

app.get('/home', (req, res) => {
  res.send('Home Page');
});

app.listen(port, () => {
  console.log(`Mi port ${port}`);
});
