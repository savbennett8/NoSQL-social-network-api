//only need Schema construction & model function
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username is required.',
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: 'Email is required.',
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    //array of _id values referencing the 'Thoughts' model
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    //array of _id values self-referencing the 'User' model
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

//get total count of friends on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
});

//create the User model
const User = model('User', UserSchema);

module.exports = User;