const mongoose = require('./connection.js')

const SportSchema = mongoose.Schema ({
  name: String,
  location: String,
});

const UserCollection = mongoose.model('user', SportSchema);

function getAllSports(){
  return UserCollection.find();
}

function getSport(sportId){
  return UserCollection.findById(sportId)
}

function addNewSport(newSport) {
  return UserCollection.create(newSport)
}
 function updateSport(sportId, updatedSport){
   return UserCollection.updateOne({_id:sportId}, updatedSport)
 }
 function deleteSport(sportId) {
   return UserCollection.findByIdAndDelete(sportId);
 }

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewSport,
  deleteSport,
  getAllSports,
  getSport,
  updateSport

}