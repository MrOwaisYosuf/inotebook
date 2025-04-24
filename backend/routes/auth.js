const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create a new user
router.post('/register', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save()
    res.send("User registered successfully");
})

router.get('/', (req, res) => {
    console.log(req.body);
    res.send("Success");
})

module.exports = router;