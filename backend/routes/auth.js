const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
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
            const data = {
                user: {
                    id: user.id
                }
            };
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({ authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    };
})

// Authenticate user
router.post('/login', [
    body('email', "Invalid email").isEmail(),
    body('password', "Password can't be less than 8 characters").isLength({ min: 8 }),
], async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
        try {
            const { email, password } = req.body;
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "Invalid credentials" });
            }
            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                return res.status(400).json({ error: "Invalid credentials" });
            }
            const data = {
                user: {
                    id: user.id
                }
            };
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({ authToken });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    }
})

// Get logged in user details
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;