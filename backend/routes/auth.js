const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    obj = {
        name: "Owais Yosuf",
        dept: "Computer Science",
        school: "School of Technology",
        university: "Islamic University of Science and Technology",
    }
    res.json(obj);
})

module.exports = router;