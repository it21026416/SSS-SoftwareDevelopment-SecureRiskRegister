const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.post('/', async (req, res) => {

	try {
		const username = req.body.username;
		const password = req.body.password;

		const data = await User.find({ username: username})
		const isCorrectPassword = data[0].password === password;

		if (isCorrectPassword) {
			res.json({ message: 'User logged in' });
		} else {
			res.json({ message: 'Wrong password' });
		}
		
	} catch (err) {
		console.log(err);
	}

});

module.exports = router;
