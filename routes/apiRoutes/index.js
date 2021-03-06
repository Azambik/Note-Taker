//including router to index.js 
const router = require('express').Router();
//including note route
const notesRoute = require('../apiRoutes/notesRoute');

//use noteRoute
router.use(notesRoute);

module.exports = router;