const express = require('express');
const router = express.Router();
const CategoriesService = require('./../services/categoriesService');
const service = new CategoriesService();

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories)
});

// router.get('/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId
//   })
// })

router.post('/', (req, res) => {
  const body = req.body;
  const newCategorie = service.create(body);
  res.status(201).json(newCategorie);
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const categorie = service.update(id, body);
  res.json(categorie);
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
})

module.exports = router
