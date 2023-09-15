const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'clothing',
  },
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Footwear',
  },
  {
    category_name: 'Toys',
  },
  
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
