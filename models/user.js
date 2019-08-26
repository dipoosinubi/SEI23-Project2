const mongoose = require('./connection.js')

const userSchema = mongoose.Schema ({
  name: String,
  city: String,
  state: String,
  age: Number,
});

const UserCollection = mongoose.model('user', UserSchema);

function getAllUsers(){
  return UserCollection.find();
}

function getUser(userId){
  return UserCollection.findById(userId)
}

function addNewUser(newuser) {
  return UserCollection.create(newuser)
}
 function updateUser(userId, updatedUser){
   return UserCollection.updateOne({_id:userId}, updatedUser)
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