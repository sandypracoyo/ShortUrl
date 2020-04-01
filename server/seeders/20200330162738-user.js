'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		return queryInterface.bulkInsert(
			'users',
			[
				{
					username: 'John doe',
					password: 'jshdsdsd',
					token: 'fdaf8123dfdv'
				},
				{
					username: 'Adi S',
					password: 'jdfd',
					token: 'fdaf8123dfdv'
				},
				{
					username: 'Juni antara',
					password: 'jddffd',
					token: 'fdaf8123dfdv'
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	}
};
