//including router to noteRoute
const router = require('express').Router();
//linking notes.json
const { notes } = require('../../db/db.json');
//including notes.js functions
const {createNewNote, deleteById } = require ('..//..//lib/notes')

router.get('/notes', (req, res) => {

    res.json(notes);
});
router.post('/notes', (req, res) => {
    //setting id number for note
    req.body.id = notes.length.toString();
    //console.log(req.body.id);
    const note = createNewNote(req.body, notes);
    res.json(note);
})
router.delete('/notes/:id', (req, res) => {
    //getting id to be deleted
    //console.log(req.params.id)
    //calling deleteById in notes.js
  deleteById(req.params.id, notes)  
  //sending back response so page can refresh
  res.json();
})

module.exports = router;