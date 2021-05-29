const router = require('express').Router();

const {
    //all user route names here:
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

//set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//set up GET single user, PUT, and DELETE by _id at /api/users/:_id
router
    .route('/:_id') //or "/:id" not sure need to check
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;