
const mongoose = require('./connection.js')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    // required: true,
  },
  location: {
    type: String,
    // required: true
  },
  Age: {
    type: Number,
    // required: true
  },
  profilePicture:{
    type: String,
    default:'images/profile .png'
  }
});

const UserCollection = mongoose.model('user', UserSchema);

function getAllUsers() {
  return UserCollection.find();
}

function getUser(userId) {
  return UserCollection.findById(userId)
}

function addNewUser(newUser) {
  return UserCollection.create(newUser)
}
function updateUser(userId, updatedUser) {
  return UserCollection.updateOne({ _id: userId }, updatedUser)
}
function deleteUser(userId) {
  return UserCollection.findByIdAndDelete(userId);
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser

}
