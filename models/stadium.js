const mongoose = require('./connection.js')

const StadiumSchema = mongoose.Schema ({
  name: String,
  club: String,
  location: String,
  capacity: Number,
});

const StadiumCollection = mongoose.model('stadium', StadiumSchema);

function getAllStadiums(){
  return StadiumCollection.find();
}

function getStadium(stadiumId){
  return StadiumCollection.findById(stadiumId)
}

function addNewStadium(newStadium) {
  return StadiumCollection.create(newStadium)
}
 function updateStadium(stadiumId, updatedStadium){
   return StadiumCollection.updateOne({_id:stadiumId}, updatedStadium)
 }
 function deleteStadium(stadiumId) {
   return StadiumCollection.findByIdAndDelete(stadiumId);
 }

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  addNewStadium,
  deleteStadium,
  getAllStadiums,
  getStadium,
  updateStadium

}