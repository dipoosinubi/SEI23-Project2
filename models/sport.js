const mongoose = require('./connection.js')

const SportSchema = mongoose.Schema ({
  name: String,
  location: String,
});

const SportCollection = mongoose.model('sport', SportSchema);

function getAllSports(){
  return SportCollection.find();
}

function getSport(sportId){
  return SportCollection.findById(sportId)
}

function addNewSport(newSport) {
  return SportCollection.create(newSport)
}
 function updateSport(sportId, updatedSport){
   return SportCollection.updateOne({_id:sportId}, updatedSport)
 }
 function deleteSport(sportId) {
   return SportCollection.findByIdAndDelete(sportId);
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