'use strict';
module.exports = (sequelize, DataTypes) => {
	const track = sequelize.define(
		'track',
		{
			short_url_id: DataTypes.INTEGER,
			ip_address: DataTypes.STRING,
			refferer_url: DataTypes.STRING
		},
		{}
	);
	track.associate = function(models) {
		// associations can be defined here
		track.belongsTo(models.short_url, {
			foreignKey: 'short_url_id',
			onUpdate: 'CASCADE'
		});
	};
	return track;
};
