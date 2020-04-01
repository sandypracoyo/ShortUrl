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
			'tracks',
			[
				{
					short_url_id: 1,
					ip_address: '192.167.1.3',
					refferer_url: 'http://www.google.com'
				},
				{
					short_url_id: 1,
					ip_address: '192.167.1.3',
					refferer_url: 'http://www.google.com'
				},
				{
					short_url_id: 1,
					ip_address: '192.167.1.3',
					refferer_url: 'http://www.google.com'
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
