const { Tag } = require('../models');

const tagData = [
  
  {
    tag_name: 'long-sleveed ',
  },
  {
    tag_name: 'vans',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },

];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
