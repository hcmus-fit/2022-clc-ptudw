const express = require('express');
const router = express.Router();
const authenticationController = require('./authenticationController');
const passport = require('./passport');

router.get('/register', authenticationController.registerShow);
router.post('/register', authenticationController.register);
router.get('/login', authenticationController.loginShow);
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

router.get('/logout', authenticationController.logout);

module.exports = router;
