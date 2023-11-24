'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.renameColumn('comments', 'createdAt', 'created_at');
    queryInterface.renameColumn('comments', 'updatedAt', 'updated_at');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.renameColumn('comments', 'created_at' ,'createdAt');
    queryInterface.renameColumn('comments', 'updated_at', 'updatedAt');
  }
};
