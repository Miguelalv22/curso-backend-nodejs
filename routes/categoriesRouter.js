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

module.exports = router
