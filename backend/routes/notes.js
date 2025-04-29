const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');

// Fetch All Notes
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
})

// Add a Note
router.post('/addnote', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    const note = new Note({
        title, description, tag, user: req.user.id
    });
    const savedNote = await note.save();
    res.json(savedNote);
});

module.exports = router;