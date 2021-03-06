const router = require('express').Router();

const {
    //all user route names here:
    getAllUsers,
    getUserById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    deleteFriend
} = require('../../controllers/user-controller');

//set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//set up GET single user, PUT, and DELETE by _id at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//set up POST and DELETE a friend to friend list at /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;