const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a new user
router.post('/register', [
    body('name', "Name can't be less than 3 characters").isLength({ min: 3 }),
    body('email', "Invalid email").isEmail(),
    body('password', "Password can't be less than 8 characters").isLength({ min: 8 }),
], (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }).then(user => res.json(user))
            .catch(err => res.status(500).json({ error: err.message }));
    } else {
        res.send({ errors: result.array() })
    };
})

router.get('/', (req, res) => {
    console.log(req.body);
    res.send("Success");
})

module.exports = router;