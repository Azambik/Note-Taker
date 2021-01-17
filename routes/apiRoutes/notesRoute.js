//including router to noteRoute
const router = require('express').Router();
//linking notes.json
const { notes } = require('../../data/notes.json');

router.get('/notes', (req, res) => {
    res.json(notes);
});
router.post('/notes', (req, res) => {
    //setting id number for note
    req.body.id = notes.length.toString();
    console.log(req.body.id);
    const note = createNewNote (req.body, note);
    res.json(note);
})

module.exports = router;