const router = require('express').Router();

const {
    //thought route names go here
    getAllThoughts,
    getThoughtById,
    createThought,
    createReaction,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

//set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

//set up GET single thought, PUT, and DELETE by _id at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

//set up reactions POST & DELETE at /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction);

module.exports = router;