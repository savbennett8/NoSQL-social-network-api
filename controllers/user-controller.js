const { User } = require('../models');

const userController = {
    //get all users
    getAllUsers(req, res) {
        User.find({})
            //do NOT return this field from the user data
            .select('-__v')
            //sort in DESC order by _id value
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(e => {
                console.log(e);
                res.status(400).json(e);
            });
    },

    //get one user by _id
    //restructure 'req' to only use 'params'
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            //include thought data
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with that id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(e => {
                console.log(e);
                res.status(400).json(e);
            });
    },

    //POST new user
    //restructure 'req' to only use 'body'
    //expects: "username" and "email"
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(e => res.status(400).json(e));
    },

    //PUT (update) user by _id
    //use 'params' and 'body' from 'req'
    updateUser({ params, body }, res) {
        //{new: true} property returns the updated doc instead of original
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(e => res.status(400).json(e));
    },

    //delete user by _id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json({ message: 'User successfully deleted!' });
            })
            .catch(e => res.status(400).json(e));
    }
};

module.exports = userController;