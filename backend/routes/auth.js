const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "MyNameIsOwaisAndIAmTheBestDeveloperInTheWorld";

// Create a new user
router.post('/register', [
    body('name', "Name can't be less than 3 characters").isLength({ min: 3 }),
    body('email', "Invalid email").isEmail(),
    body('password', "Password can't be less than 8 characters").isLength({ min: 8 }),
], async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res.status(400).json({ error: "User already exists" });
            }
            const salt = bcrypt.genSaltSync(10);
            const securedPassword = bcrypt.hashSync(req.body.password, salt);
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: securedPassword
            })
            const authToken = jwt.sign({ id: user.id }, JWT_SECRET);
            res.json({ authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    };
})

router.get('/', (req, res) => {
    console.log(req.body);
    res.send("Success");
})

module.exports = router;