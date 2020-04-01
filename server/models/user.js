'use strict';
module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		'user',
		{
			username: DataTypes.STRING,
			password: DataTypes.STRING,
			token: DataTypes.STRING
		},
		{}
	);
	user.associate = function(models) {
		// associations can be defined here
		user.hasMany(models.short_url, {
			foreignKey: 'user_id',
			onUpdate: 'CASCADE'
		});
	};
	return user;
};
