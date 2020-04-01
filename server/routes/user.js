const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { randomString, md5 } = require('../helpers/utils');
const { user } = require('../models/index');

router.post('/login', async (req, res) => {
	const account = req.body;

	try {
		const auth = await user.findOne({
			where: {
				username: account.username,
				password: md5(account.password)
			}
		});
		if (auth) {
			res.json({
				status: true,
				message: 'Successful',
				data: auth.token
			});
		} else {
			res.status(401).json({
				status: false,
				message: 'Username/password incorrect'
			});
		}
	} catch (error) {
		res.status(500).json({
			status: false,
			message: error
		});
	}
});

router.post('/register', async (req, res) => {
	const account = req.body;

	const password = md5(account.password);
	const token = jwt.sign(account.username, randomString());

	account.password = password;
	account.token = token;
	account.createdAt = new Date();
	account.updatedAt = new Date();

	try {
		await user.create(account);

		res.json({
			status: true,
			message: 'Successful',
			data: account.token
		});
	} catch (error) {
		res.status(500).json({
			status: false,
			message: error
		});
	}
});

router.get('/', async (req, res) => {
	try {
		const users = await user.findAll();

		res.json({
			status: true,
			message: 'Successful',
			data: users
		});
	} catch (error) {
		res.status(500).json({
			status: false,
			message: error
		});
	}
});

module.exports = router;
