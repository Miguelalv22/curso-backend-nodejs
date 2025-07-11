const { faker } = require('@faker-js/faker');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const limit = 5;

    for (let i = 0; i < limit; i++) {
      this.categories.push({
        id: faker.string.uuid(),
        name: faker.commerce.productAdjective(),
      })
    }
  }
  create() {

  }
  find() {
    return this.categories;
  }
  // findOne(id) {
  //   return this.categories.find(item => item.id === id);
  // }
  update() {

  }
  delete() {

  }
};

module.exports = CategoriesService;
