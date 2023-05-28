const express = require('express');
const router = express.Router();
const Session = require('../models/Sessions');

router.post('/update', async (req, res) => {
	const newSession = new Session({
		username: req.body.username,
		notes: req.body.notes,
		lastUpdatedDate: req.body.lastUpdatedDate,
		darkMode: req.body.darkMode
	})

	const data = await Session.findOne({ username: req.body.username })
	if (data) {
		Session.findOneAndUpdate({ username: req.body.username }, {
			$set: {
				notes: req.body.notes,
				lastUpdatedDate: req.body.lastUpdatedDate,
				darkMode: req.body.darkMode
			}
		},
			{ new: true })
			.then(session => res.json(session))
			.catch(err => console.log(err));
	} else {
		newSession.save()
			.then(session => res.json(session))
			.catch(err => console.log(err));
	}

});

router.post('/get', (req, res) => {
	Session.findOne({ username: req.body.username })
		.then(session => res.json(session))
		.catch(err => console.log(err));
});

module.exports = router;
