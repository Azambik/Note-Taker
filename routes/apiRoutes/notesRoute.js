//including router to noteRoute
const router = require('express').Router();
//linking notes.json
const { notes } = require('../../data/notes.json');

router.get('/notes', (req) => {
    let results = notes;
    results.json(results);
})

module.exports = router;