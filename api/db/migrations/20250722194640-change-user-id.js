'use strict';
const { DataTypes } = require('sequelize');
const { CUSTOMER_TABLE } = require('./../models/customerModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'use_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  async down(queryInterface,) {
    //await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
