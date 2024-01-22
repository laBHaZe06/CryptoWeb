const express = require('express');
const router = express.Router();
const authService = require('../services/Auth.service');

// routes
router.post('/', authenticate);
router.post('/logout', logOut);

module.exports = router;

async function authenticate(req, res, next)
{
    authService.signin(req.body)
    .then(user => res.json(user))
    .catch(next);
}

async function logOut(req,res){
    authService.logOut(req,res)
    .then(user => res.json(user))
    .catch(next);
}

