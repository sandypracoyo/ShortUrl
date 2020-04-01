const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		author: 'Sandy Pracoyo',
		github: 'https://github.com/sandypracoyo'
	});
});

module.exports = router;
