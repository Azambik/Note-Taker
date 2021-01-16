//including path to index.js to help with file system
const path = require('path');
//including router to link routs to server.js
const router = require('express').Router();

//route for sending index.html to the client
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

module.exports = router;
