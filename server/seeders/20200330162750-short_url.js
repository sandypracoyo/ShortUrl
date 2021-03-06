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
			'short_urls',
			[
				{
					title: 'google',
					short_url: 'sds234',
					url: 'http://google.com',
					user_id: 1
				},
				{
					title: 'google',
					short_url: 'sds234',
					url: 'http://google.com',
					user_id: 1
				},
				{
					title: 'google',
					short_url: 'sds234',
					url: 'http://google.com',
					user_id: 1
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
