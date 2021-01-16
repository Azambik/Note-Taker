//adding path to project to help with file system
const path = require('path');
//adding router to link routs to server.js
const router = require('express').Router();

//route for sending index.html to the client
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../../public/index.html'));
});

module.exports = router;
