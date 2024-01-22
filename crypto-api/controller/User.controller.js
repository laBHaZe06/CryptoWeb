const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const validateRequest = require('../middleware/validate-request');
const userService = require('../services/User.service');
const {auth} = require('../middleware/index');
// routes 

router.post('/register', createSchema, create);
router.get('/', auth.verifyToken ,auth.isAdmin ,getAll);
router.get('/:id', auth.verifyToken,auth.isUserOrAdmin,getById);
router.put('/update/:id', auth.verifyToken,auth.isAdmin, update);
router.delete('/delete/:id', auth.verifyToken,auth.isAdmin, _delete);

module.exports = router;

function getAll(req, res, next)
{
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getById(req, res, next)
{
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function create(req, res, next)
{
    userService.create(req.body).then((user) => res.json(user)).catch(next);
}

function update(req, res, next)
{
    userService.update(req.params.id, req.body)
        .then(() => res.json({ message: 'User updated' }))
        .catch(next);
}




function _delete(req, res, next)
{
    userService.delete(req.params.id)
        .then(() => res.json({ message: 'User deleted' }))
        .catch(next);
}



// schema grace au module joi

function createSchema(req, res, next)
{
    const schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email().lowercase().required(),
        password: Joi.string().min(7).required().strict(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required().strict()
    });
    validateRequest(req, next, schema);
}


