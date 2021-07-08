const router = require('express').Router();

const {
    //thought route names go here
    getAllThoughts,
    getThoughtById,
    createThought,
    createReaction,
    updateThought,
    deleteThought,
    deleteReaction
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
    .route('/:id/reactions')
    .post(createReaction);

router
    .route('/:id/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;