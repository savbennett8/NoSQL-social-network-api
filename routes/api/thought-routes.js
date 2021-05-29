const router = require('express').Router();

const {
    //thought route names go here
} = require('../../controllers/comment-controller');

//set up GET all and POST at /api/thoughts
router
    .route('/')
    .get()
    .post();

//set up GET single thought, PUT, and DELETE by _id at /api/thoughts/:id
router
    .route('/:id')
    .get()
    .put()
    .delete();

module.exports = router;