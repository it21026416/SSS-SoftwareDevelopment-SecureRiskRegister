const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.post('/', (req, res) => {
	const newUser = new User({
		username: req.body.username,
		password: req.body.password
	})

	newUser.save()
		.then(user => res.json(user))
		.catch(err => console.log(err));
});

module.exports = router;
