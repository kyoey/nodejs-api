const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const UserSchema   = new Schema({
    name: { type: String, required: true},
    job: String,
    bio: String
});

module.exports = mongoose.model('UserModel', UserSchema);
