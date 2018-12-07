const express = require('express');
const models = require('../models');
const passport = require('../middlewares/auth');

const router = express.Router();
const User = models.User;

router.get('/signup', (req, res) => {
	res.json({
		msg : "Succesful route to /api/signup GET"
	});
});

router.post('/signup', (req, res) => {
	User.create({
		username: req.body.username,
		password_hash: req.body.password,
	}).then((user) => {
		res.status(200).json({
			username: user.username,
			id: user.id,
		})
	}).catch(() => {
		res.status(400);
	});
});

router.post('/login',
	passport.authenticate('local', { failureRedirect: '/api/signup' }),
	(req, res) => {
		res.json({
			msg: "Succesfully authenticated",
			id: req.user.id,
			username: req.user.username,
		});
	});

router.get('/logout', (req, res) => {
	req.logout();
	res.sendStatus(200);
});

module.exports = router;